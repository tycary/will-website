# How to Add New Projects - No Coding Required!

This guide will help you easily add new projects to William's website without any coding knowledge.

## Step 1: Prepare Your Project Image

1. **Get your project image ready**
   - Recommended size: 800x600 pixels (or similar rectangular shape)
   - Supported formats: `.jpg`, `.jpeg`, `.png`, `.webp`
   - Keep file size under 2MB for fast loading
   - Choose a clear, high-quality image that represents your project well

2. **Name your image file**
   - Use lowercase letters only
   - Replace spaces with hyphens (-)
   - Example: `my-new-project.jpg` or `robotics-arm-2024.png`
   - **Remember this filename** - you'll need it in Step 3!

3. **Save the image**
   - Put your image file in: `client/src/assets/projects/`
   - This is the same folder where you'll find other project images

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
      "description": "Write a detailed description of your project. Explain what it does, what problems it solves, and what makes it interesting or innovative.",
      "technologies": ["Technology 1", "Technology 2", "Technology 3", "Add more as needed"],
      "status": "In Progress",
      "image": "your-image-filename.jpg",
      "link": "#",
      "github": "#",
      "featured": true,
      "completedDate": null,
      "category": "Choose a category"
    }
```

## Step 4: Fill in Your Project Details

Replace the placeholder text with your actual project information:

- **id**: Use a unique number (higher than existing projects)
- **title**: Your project's name
- **description**: Detailed explanation of what your project does
- **technologies**: List of technologies/tools used (in quotes, separated by commas)
- **status**: Choose from: "Planning", "Design Phase", "In Progress", "Testing", "Completed", "Published"
- **image**: The exact filename you used in Step 1
- **link**: Web link to your project (use "#" if none)
- **github**: GitHub link (use "#" if none)
- **featured**: Set to `true` to show on main page, `false` to hide
- **completedDate**: Date completed in "YYYY-MM-DD" format, or `null` if not completed
- **category**: Choose from: "Kinetic Art", "Mechanical Systems", "Research", "Manufacturing", "Software", "Biomedical"

## Example: Adding a New Project

Here's a complete example of adding a new robotics project:

```json
    {
      "id": 7,
      "title": "Robotic Arm Controller",
      "description": "A 6-axis robotic arm designed for precision assembly tasks. Features custom servo controllers, computer vision integration, and a user-friendly interface for programming complex movements.",
      "technologies": ["Robotics", "Computer Vision", "Arduino", "Python", "3D Printing"],
      "status": "Completed",
      "image": "robotic-arm-controller.jpg",
      "link": "https://myproject.com",
      "github": "https://github.com/myusername/robotic-arm",
      "featured": true,
      "completedDate": "2024-06-15",
      "category": "Mechanical Systems"
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