# wfh-request
interactive web page where I, an intern ask for work-from-home permission lol

✨ Features
🎯 Interactive Elements

YES Button: Shows celebration animation with:
Funny success GIF
Confetti explosion across the screen
Congratulatory message

NO Button:
Detects mouse within 100px radius
Instantly teleports to random position on entire page
Moves at high speed (0.15s transition)
Actually impossible to click!

💻 Technical

Clean, organized file structure
Well-commented code
Separation of concerns (CSS, JS, PHP separated)
Reusable components (header/footer)
Configuration file for easy customization

wfh-request/
│
├── 📄 index.php                    # Main page with question and buttons
├── 📄 README.md                    # This documentation file
│
├── 📁 config/
│   └── 📄 config.php              # Site settings, paths & constants
│
├── 📁 includes/
│   ├── 📄 header.php              # Reusable HTML head & meta tags
│   └── 📄 footer.php              # Reusable footer with JS includes
│
└── 📁 assets/
    ├── 📁 css/
    │   └── 📄 style.css           # All styles & animations
    │
    ├── 📁 js/
    │   └── 📄 main.js             # Button logic, confetti & movement
    │
    └── 📁 images/
        └── .gitkeep                # Placeholder for custom images

🚀 Installation
Option 1: Laravel Herd (Recommended)
Step 1: Install Laravel Herd

Download from: https://herd.laravel.com/
Install it (takes 2 minutes)
Free for everyone!

Step 2: Create Project
# Navigate to Herd directory
cd ~/Herd  # Mac/Linux
# OR
cd C:\Users\YourName\Herd  # Windows

# Create project folder
mkdir wfh-request
cd wfh-request

Step 3: Add Files

Copy all project files into ~/Herd/wfh-request/
That's it!

Step 4: Access Site
http://wfh-request.test

🛠️ Technologies Used
PHP 8.x       Server-side logic
HTML5         Page structure
CSS3          Styling & animations
JavaScript    Interactive functionality
Laravel Herd  Local development server
