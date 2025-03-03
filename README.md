# Ben Love
### Handyman Freelance Website

![Website Mockup](mockup.png)

This is a simple, responsive website for Ben Love, a freelance handyman offering services for both houses and houseboats. The website includes sections for home services, houseboat services, project gallery, about information, and a contact form.

The Figma template for this project can be found here: [www.figma.com/community/file](https://www.figma.com/community/file/1457802289525249318/handyman-template)

Inspirations for this website can be found here: [www.wix.com/website/templates](https://www.wix.com/website/templates?criteria=handyman&page=2)

### Live Version

The live version of the website is currently available at: [https://aria-vero-s.github.io/handyman/](https://aria-vero-s.github.io/handyman/).

The website will soon be hosted at [www.benjaminelove.co.uk](http://www.benjaminelove.co.uk), which will be managed through [www.names.co.uk](https://www.names.co.uk) and served via GitHub Pages.

## Features

- **Navigation Bar**: Links to different sections (Home, Services, About, Contact)
- **Hero Section**: Highlighting Ben's professional renovation services.
- **Project Gallery**: Displays images of completed projects with descriptions.
- **Services Section**: Lists services offered for homes and houseboats.
- **About Section**: Introduces Ben and provides background on his work.
- **Contact Form**: Allows visitors to contact Ben directly through a form powered by [formspree](http://www.formspree.io).
- **Image Popup**: View project images in a popup with additional descriptions.

## Project Structureformspree
```plaintext
HANDYMAN/
├── index.html           # Main HTML file
├── styles.css           # Custom styles
├── image1.jpg           # Hero image
├── image1.jpg           # Project image 1
├── image2.jpg           # Project image 2
├── image3.jpg           # Project image 3
├── mockup.png           # Mockup image
├── LICENSE              # License
└── README.md            # This readme file
```

## Technologies Used

- **HTML5**: For structuring the website content.
- **CSS3**: For styling the website.
- **Bootstrap 4**: For responsive design and layout.
- **JavaScript**: For interactive image popups and for displaying an alert if the user doesn't provide at least one contact method (either Email or Phone)

## Installation

1. Clone the repository to your local machine:  
   `git clone https://github.com/aria-vero-s/handyman.git`

2. Open the `index.html` file in your browser to view the website.

## Usage

- **Home**: Displays a hero message about Ben's services.
- **Gallery**: A section to showcase completed projects with clickable images. When an image is clicked, a popup shows more details about the project.
- **Services**: Displays a list of services Ben offers for both houses and houseboats.
- **About**: A brief introduction to Ben and his experience in the handyman field.
- **Contact**: A contact form powered by [formspree](http://www.formspree.io) that visitors can use to reach out to Ben.

## Contact Form (with Formspree)

This project includes a contact form that integrates with [formspree](http://www.formspree.io) to send form submissions directly to your email.

### How to Set Up the Form

1. Make sure to replace the Formspree action URL in the HTML form:
    ```html
    <form id="contact-form" action="https://formspree.io/f/xrbbolzo" method="POST">
    ```
    with:
    ```html
    <form id="contact-form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
    ```

2. Replace `YOUR_FORM_ID` with your actual Formspree form ID. You can obtain this ID by signing up at [Formspree](https://formspree.io/) and creating a new form.

3. Once the change is made, the form will send submission data to your email.

## Additional Notes

- Make sure each form input has a `name` attribute to ensure data is correctly sent to Formspree.
- The form will submit using theBenLove POST method.

Now your contact form will be ready to receive messages and send them to your designated email!

## Customization

- To update the content or services listed, modify the HTML directly, particularly in the **About** and **Services** sections.
- Add more images to the **Gallery** by placing them in the project folder and updating the image paths in the HTML file.

### Notes

- Ensure the images used in the gallery (`image1.jpg`, `image2.jpg`, and `image3.jpg`) are correctly linked in the HTML and located in the same directory as this README file.
- The popup feature allows users to click on images and view descriptions, enhancing the experience of browsing the project gallery.

## Image Credits

This project uses images from Unsplash. Please credit the photographers as follows:

- **Photographer**: [Cottonbro](https://unsplash.com/@cottonbro) **Image link**: [Unsplash](https://unsplash.com/photos/PxlKOcj0a3Q) (Hero image)

- **Photographer**: [Min An](https://unsplash.com/@minan) **Image link**: [Unsplash](https://unsplash.com/photos/xtFMDRhU8Lo)

- **Photographer**: [JÉSHOOTS](https://unsplash.com/@jshoots) **Image link**: [Unsplash](https://unsplash.com/photos/48mTwDzizqE)

- **Photographer**: [Bec Wilcock](https://unsplash.com/@becwilcock) **Image link**: [Unsplash](https://unsplash.com/photos/xC3cHbp4XJE)

These images are licensed under the [Unsplash License](https://unsplash.com/license).


## License

This project is licensed under the MIT License - see the LICENSE file for details.
