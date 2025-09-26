# How to Add New Projects - No Coding Required!

This guide will help you easily add new projects to William's website without any coding knowledge.

## Step 1: Prepare Your Project Images

1. **Create a project folder**
   - Each project now has its own folder for images
   - Choose a folder name: lowercase letters with hyphens (e.g., `my-awesome-robot`)
   - Create this folder in: `client/src/assets/projects/[your-folder-name]/`

2. **Prepare multiple images**
   - **Main image**: This will be the thumbnail (name it `main.jpg`)
   - **Additional images**: Process photos, results, close-ups, etc.
   - Recommended size: 800x600 pixels (or similar rectangular shape)
   - Supported formats: `.jpg`, `.jpeg`, `.png`, `.webp`
   - Keep file sizes under 2MB for fast loading

3. **Name your image files**
   - Use descriptive names: `main.jpg`, `process.jpg`, `assembly.jpg`, `result.jpg`
   - Use lowercase letters and hyphens only
   - The first image in your list will be the thumbnail

4. **Add images to your project folder**
   - Put all images in: `client/src/assets/projects/[your-folder-name]/`
   - Example: `client/src/assets/projects/my-awesome-robot/main.jpg`

## Step 2: Edit the Projects File

1. **Find the projects file**
   - Navigate to: `client/src/data/projects.json`
   - This file contains all the project information

2. **Open the file**
   - You can open this file in any text editor (Notepad, TextEdit, etc.)
   - Or use VS Code if you have it installed

## Step 3: Add Your New Project

1. **Find the projects section**
   - Look for the line that says `"projects": [`
   - You'll see a list of existing projects in curly braces `{ }`

2. **Add your new project**
   - Copy the template below and paste it **before the very last `]`**
   - Make sure to add a **comma** after the previous project's closing `}`

```json
    {
      "id": 999,
      "title": "Your Project Title Here",
      "description": "Brief description that appears on the project card (2-3 sentences).",
      "detailedDescription": "Detailed description that appears when the card is expanded. Explain the project in depth, including technical details, innovations, and significance.",
      "technologies": ["Technology 1", "Technology 2", "Technology 3", "Add more as needed"],
      "status": "In Progress",
      "images": ["main.jpg", "process.jpg", "assembly.jpg", "result.jpg"],
      "folder": "your-project-folder-name",
      "link": "#",
      "github": "#",
      "featured": true,
      "completedDate": null,
      "category": "Choose a category",
      "challenges": [
        "Challenge 1 you faced during the project",
        "Challenge 2 and how you approached it"
      ],
      "outcomes": [
        "Key outcome or achievement 1",
        "Important result or metric 2"
      ]
    }
```

## Step 4: Fill in Your Project Details

Replace the placeholder text with your actual project information:

- **id**: Use a unique number (higher than existing projects)
- **title**: Your project's name
- **description**: Brief description for the card (2-3 sentences)
- **detailedDescription**: Detailed explanation that shows when expanded
- **technologies**: List of technologies/tools used (in quotes, separated by commas)
- **status**: Choose from: "Planning", "Design Phase", "In Progress", "Testing", "Completed", "Published"
- **images**: Array of image filenames in your project folder (first one is the thumbnail)
- **folder**: The exact folder name you created in Step 1
- **link**: Web link to your project (use "#" if none)
- **github**: GitHub link (use "#" if none)
- **featured**: Set to `true` to show on main page, `false` to hide
- **completedDate**: Date completed in "YYYY-MM-DD" format, or `null` if not completed
- **category**: Choose from: "Kinetic Art", "Mechanical Systems", "Research", "Manufacturing", "Software", "Biomedical"
- **challenges**: Array of challenges you faced (optional)
- **outcomes**: Array of key results and achievements (optional)

## Example: Adding a New Project

Here's a complete example of adding a new robotics project:

```json
    {
      "id": 7,
      "title": "Robotic Arm Controller",
      "description": "A 6-axis robotic arm designed for precision assembly tasks with computer vision integration.",
      "detailedDescription": "This project features a custom-designed 6-axis robotic arm with precision servo controllers, computer vision integration for object recognition, and an intuitive user interface for programming complex movement sequences. The arm achieves sub-millimeter accuracy and can perform delicate assembly operations.",
      "technologies": ["Robotics", "Computer Vision", "Arduino", "Python", "3D Printing"],
      "status": "Completed",
      "images": ["main.jpg", "assembly.jpg", "control-interface.jpg", "vision-system.jpg"],
      "folder": "robotic-arm-controller",
      "link": "https://myproject.com",
      "github": "https://github.com/myusername/robotic-arm",
      "featured": true,
      "completedDate": "2024-06-15",
      "category": "Mechanical Systems",
      "challenges": [
        "Achieving sub-millimeter positioning accuracy",
        "Integrating computer vision with real-time control",
        "Designing intuitive programming interface"
      ],
      "outcomes": [
        "Successfully assembled 100+ precision components",
        "Achieved 99.8% positioning accuracy",
        "Reduced assembly time by 60% compared to manual methods"
      ]
    }
```

## Step 5: Save and Check

1. **Save the file**
   - Make sure to save the `projects.json` file after making changes

2. **Check your formatting**
   - Make sure you have all the commas in the right places
   - Ensure all quotes match (opening and closing)
   - The file should end with `]}`

3. **Verify your image**
   - Double-check that your image filename in the JSON exactly matches your actual image file

## Tips for Success

✅ **DO:**
- Use clear, descriptive project titles
- Write detailed descriptions that explain the value and innovation
- Include relevant technologies and skills demonstrated
- Use high-quality images that showcase your work
- Keep filenames simple: lowercase + hyphens only

❌ **DON'T:**
- Forget to add commas between projects
- Use spaces in image filenames
- Leave quotes unmatched
- Set "featured" to false unless you want to hide the project

## Getting Help

If something goes wrong:
1. Check that all commas and quotes are properly placed
2. Verify your image filename matches exactly
3. Make sure the image file is in the correct folder
4. Ask for help if you get stuck!

## Project Categories Explained

- **Kinetic Art**: Moving sculptures, interactive displays, art machines
- **Mechanical Systems**: Actuators, mechanisms, precision machinery
- **Research**: Academic research, studies, publications
- **Manufacturing**: Production optimization, process improvement
- **Software**: Programming projects, applications, algorithms
- **Biomedical**: Medical devices, biomaterials, health-related projects

Your new project will automatically appear on the website once you save the file and refresh the page!