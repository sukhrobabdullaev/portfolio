import { ImageWithDescription } from "../components/ProjectImages";

const Projects = () => {
  const images = [
    {
      id: 1,
      title: "Nayzak E-Commerce @Upwork",
      imageUrl: "/projects/Nayzak_E-Commerce.png",
      description: "Description for Image 1",
      preview: "https://nayzaki.vercel.app/",
    },
    {
      id: 2,
      title: "Code Crafters @CXC",
      imageUrl: "/projects/CodeCrafters.png",
      description: "Description for Image 2",
      preview: "https://codecrafts-alisher1403.vercel.app/",
    },
    {
      id: 3,
      title: "QR Code Generator - Personal Projects",
      imageUrl: "/projects/QR_coder_generator.png",
      description: "Description for Image 3",
      preview: "https://qr-code-generator-vite.vercel.app/",
    },
    {
      id: 4,
      title: "Translator - Personal Projects",
      imageUrl: "/projects/Tranlator_app.png",
      description: "Description for Image 4",
      preview: "https://translator-beige-six.vercel.app/",
    },
  ];

  return (
    <div className="py-4 text-center w-full mx-auto max-w-[350px] md:max-w-[1336px] md:mx-auto">
      <h2 className="md:text-[40px] text-lg font-mono font-bold mb-4 fade-opacityRight">
        Some of the projects <br /> that I have worked on
      </h2>
      <div className="projects shadow-md md:p-8 relative">
        <div className="demos md:flex md:justify-between flex md:items-center flex-col md:gap-0 gap-6 text-white">
          {images.map((image) => (
            <ImageWithDescription
              key={image.id}
              imageUrl={image.imageUrl}
              description={image.description}
              preview={image.preview}
              title={image.title}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
