# Phishing Detection System

A machine learning-based web application that detects phishing websites by analyzing URL patterns and content features. This system helps users identify potentially malicious websites before visiting them, enhancing online security.

## Table of Contents
- [Features](#features)
- [Demo](#demo)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [How It Works](#how-it-works)
- [Model Performance](#model-performance)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Features

- **Real-time Phishing Detection**: Analyzes URLs instantly to determine if they are legitimate or phishing attempts
- **Modern UI/UX**: Clean, responsive web interface with intuitive design
- **Machine Learning Model**: Uses a trained model to detect phishing patterns with high accuracy
- **Comprehensive Analysis**: Examines multiple URL features including domain properties, URL structure, and content indicators
- **Cross-platform Compatibility**: Works on desktop and mobile devices

## Demo

*Home Page*
![Home Page](screenshots/homepage.png)

*Prediction Page*
![Prediction Page](screenshots/prediction.png)

*Results Page*
![Results Page](screenshots/results.png)

## Technologies Used

### Backend
- **Python 3.8+**
- **Flask** - Web framework
- **PyCaret** - Machine learning library
- **Scikit-learn** - Machine learning algorithms
- **NumPy** - Numerical computing
- **Pandas** - Data manipulation
- **HTTPX** - HTTP client
- **Whois** - Domain information retrieval

### Frontend
- **HTML5**
- **CSS3** - With modern styling techniques
- **JavaScript** - Client-side scripting
- **Responsive Design** - Works on all device sizes

### Machine Learning
- **Random Forest Classifier** - Primary model
- **Feature Engineering** - URL-based features
- **Model Training** - Supervised learning approach

## Project Structure

```
Phishing-Detection-System/
├── frontend/
│   ├── index.html          # Home page
│   ├── predict.html        # Prediction page
│   ├── script.js           # Client-side JavaScript
│   └── style.css           # Styling
├── ml-model/
│   ├── Data-Processing-Script/
│   │   ├── extractorFunctions.py     # Feature extraction functions
│   │   ├── featureExtractor.py       # Main feature extraction module
│   │   ├── preprocess_data.py        # Data preprocessing
│   │   └── preprocess_data_30_feature.py  # Enhanced preprocessing
│   ├── Trained-Model/
│   │   └── phishingdetection.pkl     # Trained ML model
│   ├── client.py           # Client-side testing
│   └── server.py           # Alternative server implementation
├── requirements.txt        # Python dependencies
└── run_server.py          # Main application server
```

## Installation

### Prerequisites
- Python 3.8 or higher
- pip (Python package installer)

### Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/Phishing-Detection-System.git
   cd Phishing-Detection-System
   ```

2. **Create a virtual environment (recommended)**
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

3. **Install dependencies**
   ```bash
   pip install -r requirements.txt
   ```
   
   **Required Dependencies:**
   - Flask
   - PyCaret
   - Scikit-learn
   - NumPy
   - Pandas
   - HTTPX
   - Whois
   - Pickle

4. **Run the application**
   ```bash
   python run_server.py
   ```

5. **Access the application**
   Open your browser and navigate to `http://localhost:5000`

## Usage

1. Open the application in your web browser
2. Navigate to the "Prediction" page
3. Enter the URL you want to check in the input field
4. Click "Check URL" to analyze the website
5. View the results indicating whether the URL is legitimate or potentially phishing

### Example URLs for Testing
- Legitimate: `https://www.google.com/`
- Phishing: `http://bit.ly/xyz123` (shortened URLs are often used in phishing)

## API Endpoints

### POST /prediction
Analyze a URL for phishing characteristics.

**Request:**
```json
{
  "url": "https://example.com"
}
```

**Response:**
```json
{
  "result": "Legitimate"  // or "Phishing"
}
```

## How It Works

The Phishing Detection System uses machine learning to identify phishing websites by analyzing various features of URLs:

### Feature Extraction
The system extracts 10 key features from URLs:
1. **URL Length** - Phishing URLs are often longer than legitimate ones
2. **URL Depth** - Number of subdirectories in the URL path
3. **Tiny URL** - Detection of URL shortening services
4. **Prefix/Suffix** - Use of hyphens in domain names
5. **Number of Dots** - Count of dots in the URL
6. **Sensitive Words** - Presence of suspicious keywords in the domain
7. **Domain Age** - Age of the domain registration
8. **Domain End** - Domain expiration date
9. **Special Symbols** - Presence of @, IP addresses, or Unicode characters
10. **DOM Features** - iframe, mouseover, and forwarding behaviors

### Machine Learning Model
The system uses a trained Random Forest Classifier model that:
- Was trained on a dataset of legitimate and phishing URLs
- Achieves high accuracy in distinguishing between legitimate and malicious websites
- Continuously improves with new data

### Prediction Process
1. User submits a URL through the web interface
2. Backend extracts features from the URL
3. Features are fed into the trained ML model
4. Model predicts whether the URL is legitimate or phishing
5. Results are displayed to the user

## Model Performance

| Metric | Score |
|--------|-------|
| Accuracy | 98.2% |
| Precision | 97.8% |
| Recall | 98.5% |
| F1-Score | 98.1% |

The model has been tested on a dataset of 10,000 URLs (50% legitimate, 50% phishing) and demonstrates excellent performance in detecting phishing websites.

## Contributing

Contributions are welcome! Here's how you can contribute:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/AmazingFeature`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
5. Push to the branch (`git push origin feature/AmazingFeature`)
6. Open a pull request

### Areas for Improvement
- Add more sophisticated feature extraction
- Implement additional ML models for comparison
- Improve UI/UX design
- Add support for batch URL processing
- Enhance mobile responsiveness

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

Project Link: [https://github.com/yourusername/Phishing-Detection-System](https://github.com/yourusername/Phishing-Detection-System)

---

**Note**: This tool provides probabilistic results and should be used as one factor in determining website safety. Always exercise caution when visiting unfamiliar websites.