import React, { useState, useEffect, useCallback } from 'react';
import { X, CheckCircle, AlertCircle, Loader } from 'lucide-react';
import languageToolService from '../services/LanguageToolService.js';

const AIImprovementModal = ({ isOpen, onClose, resumeData, onApplyImprovements, setIsImproving }) => {
  const [improvements, setImprovements] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedImprovements, setSelectedImprovements] = useState({});
  const [processingSection, setProcessingSection] = useState('');
  const [error, setError] = useState(null);

  const getSectionType = useCallback((sectionKey, fieldKey) => {
    if (sectionKey === 'summary') return 'summary';
    if (sectionKey === 'work' || sectionKey === 'experience') return 'work';
    if (sectionKey === 'projects') return 'projects';
    return 'general';
  }, []);

  const formatSectionName = useCallback((sectionKey) => {
    return sectionKey
      .replace(/([A-Z])/g, ' $1')
      .replace(/^./, str => str.toUpperCase())
      .trim();
  }, []);

  const processResumeData = useCallback(async () => {
    if (!resumeData || typeof resumeData !== 'object') {
      console.error('Invalid resume data provided');
      setError('Invalid resume data provided');
      return;
    }

    setIsLoading(true);
    setImprovements([]);
    setError(null);
    if (setIsImproving) setIsImproving(true);
    
    const improvementResults = [];
    
    try {
      // Process text fields from resume data
      for (const [sectionKey, sectionData] of Object.entries(resumeData)) {
        if (!sectionData) continue;
        
        setProcessingSection(sectionKey);
        
        if (Array.isArray(sectionData)) {
          // Handle multiple items (like work experience, projects)
          for (let index = 0; index < sectionData.length; index++) {
            const item = sectionData[index];
            if (!item || typeof item !== 'object') continue;
            
            for (const [fieldKey, fieldValue] of Object.entries(item)) {
              if (typeof fieldValue === 'string' && fieldValue.trim().length > 10) {
                try {
                  const result = await languageToolService.improveResumeSection(
                    fieldValue, 
                    getSectionType(sectionKey, fieldKey)
                  );
                  
                  if (result && result.changes && result.changes.length > 0) {
                    improvementResults.push({
                      id: `${sectionKey}-${index}-${fieldKey}`,
                      section: sectionKey,
                      field: fieldKey,
                      itemIndex: index,
                      original: result.originalText || fieldValue,
                      improved: result.improvedText || fieldValue,
                      changes: result.changes || [],
                      displayName: `${formatSectionName(sectionKey)} → ${fieldKey} (Item ${index + 1})`
                    });
                  }
                } catch (error) {
                  console.error(`Error processing ${sectionKey}[${index}].${fieldKey}:`, error);
                }
              }
            }
          }
        } else if (typeof sectionData === 'object' && sectionData !== null) {
          // Handle single items (like header, summary)
          for (const [fieldKey, fieldValue] of Object.entries(sectionData)) {
            if (typeof fieldValue === 'string' && fieldValue.trim().length > 10) {
              try {
                const result = await languageToolService.improveResumeSection(
                  fieldValue, 
                  getSectionType(sectionKey, fieldKey)
                );
                
                if (result && result.changes && result.changes.length > 0) {
                  improvementResults.push({
                    id: `${sectionKey}-${fieldKey}`,
                    section: sectionKey,
                    field: fieldKey,
                    itemIndex: null,
                    original: result.originalText || fieldValue,
                    improved: result.improvedText || fieldValue,
                    changes: result.changes || [],
                    displayName: `${formatSectionName(sectionKey)} → ${fieldKey}`
                  });
                }
              } catch (error) {
                console.error(`Error processing ${sectionKey}.${fieldKey}:`, error);
              }
            }
          }
        }
      }
    } catch (error) {
      console.error('Error processing resume data:', error);
      setError('An error occurred while analyzing your resume. Please try again.');
    }
    
    setImprovements(improvementResults);
    setIsLoading(false);
    setProcessingSection('');
    if (setIsImproving) setIsImproving(false);
  }, [getSectionType, formatSectionName, resumeData, setIsImproving]);

  useEffect(() => {
    if (isOpen && resumeData) {
      processResumeData();
    }
  }, [isOpen, resumeData, processResumeData]);

  const toggleImprovement = useCallback((improvementId) => {
    setSelectedImprovements(prev => ({
      ...prev,
      [improvementId]: !prev[improvementId]
    }));
  }, []);

  const selectAll = useCallback(() => {
    const allSelected = {};
    improvements.forEach(imp => {
      allSelected[imp.id] = true;
    });
    setSelectedImprovements(allSelected);
  }, [improvements]);

  const deselectAll = useCallback(() => {
    setSelectedImprovements({});
  }, []);

  const applySelectedImprovements = useCallback(() => {
    const selectedResults = improvements.filter(imp => selectedImprovements[imp.id]);
    if (onApplyImprovements && typeof onApplyImprovements === 'function') {
      onApplyImprovements(selectedResults);
    }
    if (setIsImproving) setIsImproving(false);
    onClose();
  }, [improvements, selectedImprovements, onApplyImprovements, setIsImproving, onClose]);

  if (!isOpen) return null;

  const selectedCount = Object.keys(selectedImprovements).filter(key => selectedImprovements[key]).length;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black bg-opacity-50" onClick={onClose}></div>
      
      {/* Modal */}
      <div className="flex items-center justify-center min-h-screen p-4">
        <div className="relative bg-white rounded-xl shadow-xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b">
            <h2 className="text-xl font-semibold text-gray-800">
              AI Grammar & Language Improvements
            </h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Content */}
          <div className="overflow-y-auto max-h-[70vh]">
            {error ? (
              <div className="flex flex-col items-center justify-center p-12">
                <AlertCircle className="w-12 h-12 text-red-500 mb-4" />
                <h3 className="text-lg font-medium text-gray-800 mb-2">
                  Error Occurred
                </h3>
                <p className="text-gray-600 text-center mb-4">
                  {error}
                </p>
                <button
                  onClick={processResumeData}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Try Again
                </button>
              </div>
            ) : isLoading ? (
              <div className="flex flex-col items-center justify-center p-12">
                <Loader className="w-8 h-8 animate-spin text-blue-600 mb-4" />
                <p className="text-gray-600 text-center">
                  Analyzing your resume content...
                  {processingSection && (
                    <span className="block text-sm text-gray-500 mt-2">
                      Processing: {formatSectionName(processingSection)}
                    </span>
                  )}
                </p>
                <div className="text-xs text-gray-400 text-center mt-4">
                  <p>AI is checking for:</p>
                  <ul className="mt-1 space-y-1">
                    <li>• Spelling errors</li>
                    <li>• Grammar mistakes</li>
                    <li>• Punctuation issues</li>
                    <li>• Capitalization problems</li>
                    <li>• Common misspellings</li>
                  </ul>
                </div>
              </div>
            ) : improvements.length === 0 ? (
              <div className="flex flex-col items-center justify-center p-12">
                <CheckCircle className="w-12 h-12 text-green-500 mb-4" />
                <h3 className="text-lg font-medium text-gray-800 mb-2">
                  Great job! Your resume looks good
                </h3>
                <p className="text-gray-600 text-center mb-4">
                  No significant grammar, spelling, or language improvements were found.
                  Your content appears to be well-written.
                </p>
                <div className="text-sm text-gray-500 text-center">
                  <p>AI checked for:</p>
                  <ul className="mt-2 space-y-1">
                    <li>• Spelling errors</li>
                    <li>• Grammar mistakes</li>
                    <li>• Punctuation issues</li>
                    <li>• Capitalization problems</li>
                    <li>• Common misspellings</li>
                  </ul>
                </div>
              </div>
            ) : (
              <div className="p-6">
                {/* Action buttons */}
                <div className="flex items-center justify-between mb-6">
                  <p className="text-gray-600">
                    Found <strong>{improvements.length}</strong> potential improvement{improvements.length !== 1 ? 's' : ''}
                  </p>
                  <div className="flex gap-2">
                    <button
                      onClick={selectAll}
                      className="px-3 py-1 text-sm bg-blue-50 text-blue-600 rounded hover:bg-blue-100 transition-colors"
                    >
                      Select All
                    </button>
                    <button
                      onClick={deselectAll}
                      className="px-3 py-1 text-sm bg-gray-50 text-gray-600 rounded hover:bg-gray-100 transition-colors"
                    >
                      Deselect All
                    </button>
                  </div>
                </div>

                {/* Improvements list */}
                <div className="space-y-4">
                  {improvements.map((improvement) => (
                    <div
                      key={improvement.id}
                      className={`border rounded-lg p-4 transition-all ${
                        selectedImprovements[improvement.id]
                          ? 'border-blue-300 bg-blue-50'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <input
                          type="checkbox"
                          checked={selectedImprovements[improvement.id] || false}
                          onChange={() => toggleImprovement(improvement.id)}
                          className="mt-1 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                          aria-label={`Select improvement for ${improvement.displayName}`}
                        />
                        
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="text-sm font-medium text-gray-700">
                              {improvement.displayName}
                            </span>
                            <span className="px-2 py-1 text-xs bg-orange-100 text-orange-700 rounded">
                              {improvement.changes.length} change{improvement.changes.length !== 1 ? 's' : ''}
                            </span>
                          </div>
                          
                          <div className="space-y-3">
                            <div>
                              <label className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                                Current:
                              </label>
                              <p className="text-sm text-gray-700 bg-red-50 p-2 rounded mt-1">
                                {improvement.original}
                              </p>
                            </div>
                            
                            <div>
                              <label className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                                Improved:
                              </label>
                              <p className="text-sm text-gray-700 bg-green-50 p-2 rounded mt-1">
                                {improvement.improved}
                              </p>
                            </div>
                            
                            {improvement.changes && improvement.changes.length > 0 && (
                              <div>
                                <label className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                                  Changes:
                                </label>
                                <div className="mt-1 space-y-1">
                                  {improvement.changes.slice(0, 3).map((change, index) => (
                                    <div key={index} className="text-xs text-gray-600 flex items-center gap-2">
                                      <AlertCircle className="w-3 h-3 text-orange-500 flex-shrink-0" />
                                      <span>
                                        "{change.original}" → "{change.suggestion}"
                                        {change.shortMessage && (
                                          <span className="text-gray-500 ml-1">
                                            ({change.shortMessage})
                                          </span>
                                        )}
                                      </span>
                                    </div>
                                  ))}
                                  {improvement.changes.length > 3 && (
                                    <div className="text-xs text-gray-500">
                                      ...and {improvement.changes.length - 3} more change{improvement.changes.length - 3 !== 1 ? 's' : ''}
                                    </div>
                                  )}
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Footer */}
          {improvements.length > 0 && !error && (
            <div className="flex items-center justify-between p-6 border-t bg-gray-50">
              <p className="text-sm text-gray-600">
                {selectedCount} of {improvements.length} improvement{improvements.length !== 1 ? 's' : ''} selected
              </p>
              <div className="flex gap-3">
                <button
                  onClick={onClose}
                  className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={applySelectedImprovements}
                  disabled={selectedCount === 0}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
                >
                  Apply Selected Improvements
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AIImprovementModal;