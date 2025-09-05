import axios from 'axios';

class LanguageToolService {
  constructor() {
    this.baseURL = 'https://api.languagetool.org/v2';
    this.language = 'en-US';
    this.maxRetries = 3;
    this.retryDelay = 1000; // 1 second

    // Hugging Face AI Integration
    this.huggingFaceToken = process.env.REACT_APP_HUGGINGFACE_TOKEN || '';
    this.huggingFaceUrl = 'https://api-inference.huggingface.co/models';

    // Models for different AI tasks
    this.models = {
      grammar: 'facebook/bart-large-cnn', // For text summarization and improvement
      correction: 'microsoft/DialoGPT-medium', // For conversational corrections
      fluency: 'gpt2', // For text generation and fluency
      style: 'distilbert-base-uncased-finetuned-sst-2-english' // For sentiment and style analysis
    };

    // Comprehensive common spelling mistakes and corrections (no duplicates)
    this.commonMisspellings = {
      // Basic misspellings
      'teh': 'the',
      'recieve': 'receive',
      'seperate': 'separate',
      'occured': 'occurred',
      'begining': 'beginning',
      'beleive': 'believe',
      'buisness': 'business',
      'calender': 'calendar',
      'commited': 'committed',
      'exaggerate': 'exaggerate',
      'finaly': 'finally',
      'fourty': 'forty',
      'freind': 'friend',
      'goverment': 'government',
      'happend': 'happened',
      'hearbeat': 'heartbeat',
      'immediatly': 'immediately',
      'independant': 'independent',
      'knowlege': 'knowledge',
      'lenght': 'length',
      'liason': 'liaison',
      'maintainance': 'maintenance',
      'neccessary': 'necessary',
      'occassion': 'occasion',
      'persue': 'pursue',
      'priviledge': 'privilege',
      'reccommend': 'recommend',
      'rythm': 'rhythm',
      'seize': 'seize',
      'thier': 'their',
      'untill': 'until',
      'wierd': 'weird',
      'writting': 'writing',

      // Additional common misspellings
      'acheive': 'achieve',
      'arguement': 'argument',
      'beleif': 'belief',
      'bizzare': 'bizarre',
      'calander': 'calendar',
      'camoflage': 'camouflage',
      'catagory': 'category',
      'cemetary': 'cemetery',
      'changable': 'changeable',
      'collegue': 'colleague',
      'comittee': 'committee',
      'concious': 'conscious',
      'curiousity': 'curiosity',
      'definately': 'definitely',
      'dilemna': 'dilemma',
      'dissapear': 'disappear',
      'doulbe': 'double',
      'embarras': 'embarrass',
      'exhilarate': 'exhilarate',
      'fascinate': 'fascinate',
      'flourescent': 'fluorescent',
      'foriegn': 'foreign',
      'fullfil': 'fulfill',
      'garantee': 'guarantee',
      'grat': 'great',
      'hieght': 'height',
      'hono(u)r': 'honour',
      'humourous': 'humorous',
      'inoculate': 'inoculate',
      'inteligence': 'intelligence',
      'jewelry': 'jewellery',
      'judgement': 'judgment',
      'kernal': 'kernel',
      'leisure': 'leisure',
      'libary': 'library',
      'lightening': 'lightning',
      'managment': 'management',
      'manouver': 'manoeuvre',
      'marshmellow': 'marshmallow',
      'maintanance': 'maintenance',
      'neighbour': 'neighbor',
      'noticable': 'noticeable',
      'opthamologist': 'ophthalmologist',
      'playright': 'playwright',
      'posession': 'possession',
      'prefered': 'preferred',
      'privelege': 'privilege',
      'pronounciation': 'pronunciation',
      'publicly': 'publicly',
      'reciept': 'receipt',
      'religous': 'religious',
      'rember': 'remember',
      'responce': 'response',
      'sacreligious': 'sacrilegious',
      'sence': 'sense',
      'sincerly': 'sincerely',
      'speach': 'speech',
      'succesful': 'successful',
      'suprise': 'surprise',
      'tatoo': 'tattoo',
      'tendancy': 'tendency',
      'theif': 'thief',
      'tommorow': 'tomorrow',
      'tounge': 'tongue',
      'truely': 'truly',
      'vaccuum': 'vacuum',
      'vehical': 'vehicle',

      // Business/resume specific terms
      'acheivement': 'achievement',
      'experiance': 'experience',
      'responsability': 'responsibility',
      'qualificaton': 'qualification',
      'organizaton': 'organization',
      'communiction': 'communication',
      'interpersonel': 'interpersonal',
      'technicial': 'technical',
      'profesional': 'professional',
      'succesfully': 'successfully',
      'accomodation': 'accommodation',
      'acheived': 'achieved',
      'analize': 'analyze',
      'argueing': 'arguing',
      'beginer': 'beginner',
      'colaborate': 'collaborate',
      'comitted': 'committed',
      'decison': 'decision',
      'developement': 'development',
      'dissapointed': 'disappointed',
      'embarrasment': 'embarrassment',
      'finacial': 'financial',

      // Additional common misspellings including "enthusiastic" variations
      'enthusiestic': 'enthusiastic',
      'enthusastic': 'enthusiastic',
      'enthuseastic': 'enthusiastic',
      'enthusiasum': 'enthusiasm',
      'enthusiaticly': 'enthusiastically',
      'enthusiestically': 'enthusiastically'
    };
  }

  checkCommonMisspellings(text) {
    const changes = [];
    const words = text.split(/\s+/);
    let improvedText = text;

    words.forEach((word, index) => {
      // Remove punctuation for checking
      const cleanWord = word.replace(/[^\w]/g, '').toLowerCase();

      if (this.commonMisspellings[cleanWord]) {
        const originalWord = word.replace(/[^\w]/g, '');
        const correctedWord = this.commonMisspellings[cleanWord];

        // Find position in original text
        const wordStart = text.indexOf(word, changes.length > 0 ? changes[changes.length - 1].offset + changes[changes.length - 1].length : 0);

        if (wordStart !== -1) {
          changes.push({
            message: 'Common misspelling detected',
            shortMessage: 'Spelling',
            offset: wordStart,
            length: originalWord.length,
            original: originalWord,
            suggestion: correctedWord
          });

          // Apply correction to improved text
          improvedText = improvedText.replace(new RegExp('\\b' + originalWord + '\\b', 'gi'), correctedWord);
        }
      }
    });

    return { changes, improvedText };
  }

  async checkText(text) {
    if (!text || text.trim().length === 0) {
      return { originalText: text, improvedText: text, changes: [] };
    }

    // Trim text to avoid unnecessary API calls for whitespace
    const trimmedText = text.trim();

    try {
      // First check for common misspellings
      const { changes: spellingChanges, improvedText: spellingImproved } = this.checkCommonMisspellings(trimmedText);

      // Then use LanguageTool API
      const response = await this.makeRequest(spellingImproved || trimmedText);
      const matches = response.data.matches || [];

      // Combine spelling changes with API changes
      const allChanges = [...spellingChanges];

      // Apply API corrections to the spelling-improved text
      const apiImprovedText = this.applyCorrections(spellingImproved || trimmedText, matches);

      // Add API changes to the combined changes array
      const apiChanges = matches.map(match => ({
        message: match.message || 'Grammar suggestion',
        shortMessage: match.shortMessage || match.message || 'Suggestion',
        offset: match.offset,
        length: match.length,
        original: (spellingImproved || trimmedText).substring(match.offset, match.offset + match.length),
        suggestion: match.replacements?.[0]?.value || ''
      })).filter(change => change.suggestion);

      allChanges.push(...apiChanges);

      return {
        originalText: trimmedText,
        improvedText: apiImprovedText,
        changes: allChanges.filter(change => change.suggestion || change.message.includes('misspelling'))
      };
    } catch (error) {
      console.error('LanguageTool API Error:', error);

      // Even if API fails, still check for common misspellings
      const { changes: spellingChanges, improvedText: spellingImproved } = this.checkCommonMisspellings(trimmedText);

      if (spellingChanges.length > 0) {
        return {
          originalText: trimmedText,
          improvedText: spellingImproved,
          changes: spellingChanges
        };
      }

      // Return original text if both API and spelling check fail
      return {
        originalText: trimmedText,
        improvedText: trimmedText,
        changes: [],
        error: 'Grammar check service temporarily unavailable'
      };
    }
  }

  async makeRequest(text, retryCount = 0) {
    try {
      const response = await axios.post(`${this.baseURL}/check`,
        new URLSearchParams({
          text: text,
          language: this.language,
          enabledOnly: 'false',
          level: 'picky', // More thorough checking
          disabledRules: '', // Don't disable any rules
          enabledRules: '' // Enable all rules
        }),
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Accept': 'application/json'
          },
          timeout: 15000 // Increased timeout for thorough checking
        }
      );
      return response;
    } catch (error) {
      if (retryCount < this.maxRetries && this.shouldRetry(error)) {
        console.warn(`LanguageTool request failed, retrying... (${retryCount + 1}/${this.maxRetries})`);
        await this.delay(this.retryDelay * (retryCount + 1));
        return this.makeRequest(text, retryCount + 1);
      }
      throw error;
    }
  }

  shouldRetry(error) {
    // Retry on network errors or 5xx server errors
    return !error.response || 
           error.code === 'NETWORK_ERROR' || 
           error.code === 'ECONNABORTED' ||
           (error.response.status >= 500 && error.response.status < 600);
  }

  delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  applyCorrections(text, matches) {
    if (!matches || matches.length === 0) return text;

    // Sort matches by offset in descending order to maintain positions
    const sortedMatches = matches
      .filter(match => match.replacements && match.replacements.length > 0)
      .sort((a, b) => b.offset - a.offset);

    let correctedText = text;
    
    sortedMatches.forEach(match => {
      try {
        const replacement = match.replacements[0].value;
        if (replacement && match.offset >= 0 && match.length > 0) {
          correctedText = 
            correctedText.substring(0, match.offset) + 
            replacement + 
            correctedText.substring(match.offset + match.length);
        }
      } catch (error) {
        console.warn('Error applying correction:', error, match);
      }
    });

    return correctedText;
  }

  checkBasicGrammar(text) {
    const changes = [];
    let improvedText = text;

    // Check for double spaces
    if (text.includes('  ')) {
      changes.push({
        message: 'Multiple consecutive spaces found',
        shortMessage: 'Spacing',
        offset: text.indexOf('  '),
        length: 2,
        original: '  ',
        suggestion: ' '
      });
      improvedText = improvedText.replace(/  +/g, ' ');
    }

    // Check for missing spaces after punctuation
    const punctuationPatterns = [
      { pattern: /([.!?])([A-Z])/g, replacement: '$1 $2', message: 'Missing space after punctuation' },
      { pattern: /(\w)([.!?])([a-z])/g, replacement: '$1$2 $3', message: 'Missing space after punctuation' },
      { pattern: /([,:;])([A-Za-z])/g, replacement: '$1 $2', message: 'Missing space after comma, colon, or semicolon' },
      { pattern: /(\w)([,:;])([A-Za-z])/g, replacement: '$1$2 $3', message: 'Missing space after punctuation' }
    ];

    punctuationPatterns.forEach(({ pattern, replacement, message }) => {
      if (pattern.test(improvedText)) {
        const match = improvedText.match(pattern);
        if (match) {
          changes.push({
            message: message,
            shortMessage: 'Punctuation',
            offset: improvedText.search(pattern),
            length: match[0].length,
            original: match[0],
            suggestion: replacement.replace(/\$1/g, match[1]).replace(/\$2/g, match[2]).replace(/\$3/g, match[3] || '')
          });
          improvedText = improvedText.replace(pattern, replacement);
        }
      }
    });

    // Check for incorrect apostrophe usage
    const apostrophePatterns = [
      { pattern: /(\w)s'/g, replacement: '$1s\'', message: 'Incorrect apostrophe placement' },
      { pattern: /(\w)'s/g, replacement: '$1s\'', message: 'Incorrect possessive apostrophe' }
    ];

    apostrophePatterns.forEach(({ pattern, replacement, message }) => {
      if (pattern.test(improvedText)) {
        const match = improvedText.match(pattern);
        if (match) {
          changes.push({
            message: message,
            shortMessage: 'Apostrophe',
            offset: improvedText.search(pattern),
            length: match[0].length,
            original: match[0],
            suggestion: replacement.replace(/\$1/g, match[1])
          });
          improvedText = improvedText.replace(pattern, replacement);
        }
      }
    });

    // Check for common capitalization issues
    const sentences = improvedText.split(/[.!?]+/);
    sentences.forEach((sentence, index) => {
      const trimmed = sentence.trim();
      if (trimmed && trimmed.length > 0 && trimmed[0] !== trimmed[0].toUpperCase() && /[a-z]/.test(trimmed[0])) {
        const offset = improvedText.indexOf(trimmed);
        if (offset !== -1) {
          changes.push({
            message: 'Sentence should start with capital letter',
            shortMessage: 'Capitalization',
            offset: offset,
            length: 1,
            original: trimmed[0],
            suggestion: trimmed[0].toUpperCase()
          });
          improvedText = improvedText.replace(trimmed, trimmed.charAt(0).toUpperCase() + trimmed.slice(1));
        }
      }
    });

    // Check for common grammar issues
    const grammarPatterns = [
      { pattern: /\bi\s/g, replacement: 'I ', message: 'Pronoun "I" should be capitalized' },
      { pattern: /\bim\s/g, replacement: 'I\'m ', message: 'Use contraction "I\'m" instead of "im"' },
      { pattern: /\bit's\s/g, replacement: 'its ', message: 'Possessive "its" should not have apostrophe' },
      { pattern: /\bits\s/g, replacement: 'it\'s ', message: '"It\'s" is contraction for "it is"' },
      { pattern: /\btheres\s/g, replacement: 'there\'s ', message: 'Use contraction "there\'s"' },
      { pattern: /\btheyre\s/g, replacement: 'they\'re ', message: 'Use contraction "they\'re"' },
      { pattern: /\bwere\s/g, replacement: 'we\'re ', message: 'Use contraction "we\'re"' },
      { pattern: /\bthats\s/g, replacement: 'that\'s ', message: 'Use contraction "that\'s"' },
      { pattern: /\bwhos\s/g, replacement: 'who\'s ', message: 'Use contraction "who\'s"' },
      { pattern: /\bwhats\s/g, replacement: 'what\'s ', message: 'Use contraction "what\'s"' }
    ];

    grammarPatterns.forEach(({ pattern, replacement, message }) => {
      if (pattern.test(improvedText)) {
        const match = improvedText.match(pattern);
        if (match) {
          changes.push({
            message: message,
            shortMessage: 'Grammar',
            offset: improvedText.search(pattern),
            length: match[0].length,
            original: match[0],
            suggestion: replacement
          });
          improvedText = improvedText.replace(pattern, replacement);
        }
      }
    });

    return { changes, improvedText };
  }


  // Hugging Face AI Integration Methods
  async callHuggingFaceAPI(model, inputs, options = {}) {
    if (!this.huggingFaceToken) {
      console.warn('Hugging Face token not found, falling back to manual corrections');
      return null;
    }

    try {
      const response = await axios.post(
        `${this.huggingFaceUrl}/${model}`,
        {
          inputs,
          options: {
            wait_for_model: true,
            use_cache: true,
            ...options
          }
        },
        {
          headers: {
            'Authorization': `Bearer ${this.huggingFaceToken}`,
            'Content-Type': 'application/json'
          },
          timeout: 30000 // 30 seconds for AI processing
        }
      );

      return response.data;
    } catch (error) {
      console.warn('Hugging Face API error:', error.message);
      return null;
    }
  }

  async improveWithHuggingFace(text, context = 'resume') {
    if (!text || text.trim().length === 0) {
      return { improvedText: text, changes: [] };
    }

    try {
      // Create a prompt for the AI to improve the text
      const prompt = `Improve this ${context} text for better grammar, clarity, and professionalism. Keep the original meaning but make it more polished and error-free:

Original text: "${text}"

Improved version:`;

      const result = await this.callHuggingFaceAPI(this.models.grammar, prompt, {
        max_length: 500,
        temperature: 0.3,
        do_sample: true
      });

      if (result && result.length > 0) {
        const improvedText = result[0]?.generated_text || result[0]?.summary_text || text;

        // Extract the improved part (remove the prompt)
        const improvedPart = improvedText.replace(prompt, '').trim();

        if (improvedPart && improvedPart !== text) {
          return {
            improvedText: improvedPart,
            changes: [{
              message: 'AI-powered text improvement',
              shortMessage: 'AI Enhancement',
              offset: 0,
              length: text.length,
              original: text,
              suggestion: improvedPart
            }]
          };
        }
      }

      return { improvedText: text, changes: [] };
    } catch (error) {
      console.warn('Hugging Face improvement failed:', error);
      return { improvedText: text, changes: [] };
    }
  }

  async checkGrammarWithHuggingFace(text) {
    if (!text || text.trim().length === 0) {
      return { changes: [], improvedText: text };
    }

    try {
      const prompt = `Analyze this text for grammar, spelling, and style issues. Provide corrections in JSON format:

Text: "${text}"

Response format: {"corrections": [{"error": "description", "suggestion": "corrected text", "start": position, "end": position}]}`;

      const result = await this.callHuggingFaceAPI(this.models.correction, prompt, {
        max_length: 1000,
        temperature: 0.1
      });

      if (result && result.length > 0) {
        const response = result[0]?.generated_text || '';
        try {
          // Try to parse JSON response
          const parsed = JSON.parse(response);
          if (parsed.corrections && Array.isArray(parsed.corrections)) {
            return {
              changes: parsed.corrections.map(correction => ({
                message: correction.error || 'Grammar correction',
                shortMessage: 'AI Grammar',
                offset: correction.start || 0,
                length: (correction.end || 0) - (correction.start || 0),
                original: text.substring(correction.start || 0, correction.end || 0),
                suggestion: correction.suggestion || ''
              })),
              improvedText: text
            };
          }
        } catch (parseError) {
          console.warn('Failed to parse Hugging Face grammar response');
        }
      }

      return { changes: [], improvedText: text };
    } catch (error) {
      console.warn('Hugging Face grammar check failed:', error);
      return { changes: [], improvedText: text };
    }
  }

  // Enhanced improveResumeSection with Hugging Face integration
  async improveResumeSection(sectionText, sectionType = 'general') {
    if (!sectionText || typeof sectionText !== 'string') {
      return { originalText: '', improvedText: '', changes: [] };
    }

    try {
      // First check basic grammar and punctuation
      const { changes: basicChanges, improvedText: basicImproved } = this.checkBasicGrammar(sectionText);

      // Try Hugging Face AI improvement first
      const { improvedText: aiImproved, changes: aiChanges } = await this.improveWithHuggingFace(basicImproved, sectionType);

      // Then run traditional grammar check
      const result = await this.checkText(aiImproved);

      // Combine all changes
      const allChanges = [...basicChanges, ...aiChanges, ...result.changes];

      return {
        originalText: sectionText,
        improvedText: result.improvedText,
        changes: allChanges
      };
    } catch (error) {
      console.error('Error in improveResumeSection:', error);

      // Fallback to basic improvements
      const { changes: basicChanges, improvedText: basicImproved } = this.checkBasicGrammar(sectionText);
      const { changes: spellingChanges, improvedText: spellingImproved } = this.checkCommonMisspellings(basicImproved);

      return {
        originalText: sectionText,
        improvedText: spellingImproved,
        changes: [...basicChanges, ...spellingChanges]
      };
    }
  }

  // Test method for debugging - can be called from browser console
  async testImprovements(text) {
    console.log('Testing AI improvements with text:', text);
    try {
      const result = await this.improveResumeSection(text);
      console.log('AI Improvement Result:', result);
      return result;
    } catch (error) {
      console.error('Test failed:', error);
      return null;
    }
  }

  // Test Hugging Face specifically
  async testHuggingFace(text) {
    console.log('Testing Hugging Face AI with text:', text);
    try {
      const result = await this.improveWithHuggingFace(text);
      console.log('Hugging Face Result:', result);
      return result;
    } catch (error) {
      console.error('Hugging Face test failed:', error);
      return null;
    }
  }
}

const languageToolService = new LanguageToolService();
export default languageToolService;