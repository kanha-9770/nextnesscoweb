import {
  FaLeaf,
  FaProjectDiagram,
  FaLightbulb,
  FaRecycle,
} from "react-icons/fa";
import {
  papercup,
  paperplate2,
  paperbowl,
  paperlid,
  paperstraw,
  allproduct,
  paperbag1,
  missionImage,
  companyImage,
  strengthImage,
  pinkCityImage,
  paperBowlMachineImage,
  paperBagMachineImage,
  paperPlateMachineImage,
  paperFlexoMachineImage,
  fullyAutomaticBagMachineImage,
  PCM110WithPLC,
  paperStrawMachine,
  BookServiceImage,
  paperLunchBoxMachine,
  img1,
  img2,
  img3,
  img5,
  img6,bgimg1,
  bgimg2,
  bgimg3,img4,
  image1,
  image2,
  productImage,
  machineImage,
  businessImage,
  AiOutlineProduct,
  LiaToolsSolid,
  IoBarChartOutline,
  machines,
  banner,
  banner2
} from "../../../public/assets";
import { StaticImageData } from "next/image";
interface Images {
  paperBowlMachineImage: StaticImageData;
  paperBagMachineImage: StaticImageData;
  PCM110WithPLC: StaticImageData;
  paperPlateMachineImage: StaticImageData;
  paperFlexoMachineImage: StaticImageData;
  fullyAutomaticBagMachineImage: StaticImageData;
  paperStrawMachine: StaticImageData;
  paperLunchBoxMachine: StaticImageData;
}



export const images: Images = {
  paperBowlMachineImage: paperBowlMachineImage,
  paperBagMachineImage: paperBagMachineImage,
  PCM110WithPLC: PCM110WithPLC,
  paperPlateMachineImage: paperPlateMachineImage,
  paperFlexoMachineImage: paperFlexoMachineImage,
  fullyAutomaticBagMachineImage: fullyAutomaticBagMachineImage,
  paperStrawMachine: paperStrawMachine,
  paperLunchBoxMachine: paperLunchBoxMachine,
};

export const items = [
  {
    title: "Sustainability",
    description:
      "Paper industry adopts biodegradable materials and enhances recycling efforts.",
    color: "bg-green-100",
    icon: FaLeaf,
  },
  {
    title: "Featured Projects",
    description:
      "Paper industry adopts biodegradable materials and enhances recycling efforts.",
    color: "bg-purple-100",
    icon: FaProjectDiagram,
  },
  {
    title: "Innovation",
    description: "New technologies in paper manufacturing increase efficiency.",
    color: "bg-blue-100",
    icon: FaLightbulb,
  },
  {
    title: "Recycling",
    description:
      "Recycling initiatives in the paper industry have grown significantly.",
    color: "bg-yellow-100",
    icon: FaRecycle,
  },
];

export const titlesWithImages = [
  { title: "Mission & Vision", image: missionImage },
  { title: "Our Company", image: companyImage },
  { title: "Our Strength", image: strengthImage },
  { title: "The Pink City", image: pinkCityImage },
];
// links for navbar
export const links = [
  {
    name: "About Us",
    comp: "AboutUs",
  },
  {
    name: "Products",
  },
  {
    name: "Application",
  },
  {
    name: "Solutions",
  },
  {
    name: "Support",
  },

  {
    name: "Resources",
  },
  {
    name: "Videos",
  },
];

// items for banners.jsx
export const Machines = [
  {
    name: "NS-015",
    image: "PCM110WithPLC",
    mimage: PCM110WithPLC,
    category: "Paper Cup Machine, All Products",
    icon: "papercup",
    introduction:
      "The NS-015 is a high-performance paper cup machine designed for efficient production in medium to large scale enterprises. It combines reliability with speed, capable of producing up to 100 cups per minute.",
    parameters: "Voltage: 220V, Power: 1500W",
    application:
      "Ideal for producing paper cups of various sizes, from 6oz to 16oz, suitable for hot and cold beverages.",
    product_description:
      "This machine features a robust stainless steel construction that ensures durability and hygiene standards are met. It includes PLC control for precise operation and minimal wastage.",
    technical_specification: "Material: Stainless steel, Weight: 500kg",
    optional_add_ons: "Custom cup size molds available upon request.",
    faqs: "Q: What is the warranty period? A: 1-year warranty provided for parts and service.",
    related_product: "NS-016, NS-017",
  },
  {
    name: "NS-016",
    image: "PCM110WithPLC",
    mimage: PCM110WithPLC,
    category: "Paper Cup Machine, All Products",
    icon: "papercup",
    introduction:
      "The NS-016 paper cup machine is designed for versatility and efficiency, catering to small to medium-scale enterprises. It offers reliable performance and ease of operation.",
    parameters: "Voltage: 220V, Power: 1500W",
    application:
      "Suitable for producing a variety of paper cup sizes, ranging from 4oz to 12oz, for both hot and cold beverages.",
    product_description:
      "This machine is crafted from lightweight aluminum alloy, making it easy to transport and install. It features a user-friendly interface and low maintenance requirements.",
    technical_specification: "Material: Aluminum alloy, Weight: 450kg",
    optional_add_ons:
      "Automatic cup stacking unit available as an optional accessory.",
    faqs: "Q: How many cups can it produce per minute? A: This machine can produce up to 80 cups per minute.",
    related_product: "NS-015, NS-017",
  },
  {
    name: "NS-017",
    image: "PCM110WithPLC",
    mimage: PCM110WithPLC,
    category: "Paper Cup Machine, All Products",
    icon: "papercup",
    introduction:
      "The NS-017 paper cup machine is known for its precision and high-speed production capabilities, suitable for large-scale operations requiring consistent quality.",
    parameters: "Voltage: 220V, Power: 1800W",
    application:
      "Designed to produce paper cups with sizes ranging from 8oz to 20oz, catering to a wide range of beverage serving needs.",
    product_description:
      "Built with durable components and advanced PLC control, this machine ensures minimal downtime and optimal output. It includes features for custom mold adjustments and easy maintenance.",
    technical_specification: "Material: Stainless steel, Weight: 600kg",
    optional_add_ons:
      "Additional molds for special cup designs available upon request.",
    faqs: "Q: What material can this machine handle? A: It is capable of handling both single and double PE coated paper.",
    related_product: "NS-015, NS-016",
  },
  {
    name: "NS-018",
    image: "PCM110WithPLC",
    mimage: PCM110WithPLC,
    category: "Paper Cup Machine, All Products",
    icon: "papercup",
    introduction:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit.",
    parameters:
      "Sed posuere consectetur est at lobortis. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.",
    application:
      "Maecenas sed diam eget risus varius blandit sit amet non magna. Donec ullamcorper nulla non metus auctor fringilla.",
    product_description:
      "Curabitur blandit tempus porttitor. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.",
    technical_specification:
      "Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit.",
    optional_add_ons:
      "Sed posuere consectetur est at lobortis. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.",
    faqs: "Maecenas sed diam eget risus varius blandit sit amet non magna. Donec ullamcorper nulla non metus auctor fringilla.",
    related_product:
      "Curabitur blandit tempus porttitor. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.",
  },
  {
    name: "NS-019",
    image: "PCM110WithPLC",
    mimage: PCM110WithPLC,

    category: "Paper Cup Machine, All Products",
    icon: "papercup",
    introduction:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit.",
    parameters:
      "Sed posuere consectetur est at lobortis. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.",
    application:
      "Maecenas sed diam eget risus varius blandit sit amet non magna. Donec ullamcorper nulla non metus auctor fringilla.",
    product_description:
      "Curabitur blandit tempus porttitor. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.",
    technical_specification:
      "Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit.",
    optional_add_ons:
      "Sed posuere consectetur est at lobortis. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.",
    faqs: "Maecenas sed diam eget risus varius blandit sit amet non magna. Donec ullamcorper nulla non metus auctor fringilla.",
    related_product:
      "Curabitur blandit tempus porttitor. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.",
  },
  {
    name: "NS-020",
    image: "PCM110WithPLC",
    mimage: PCM110WithPLC,

    category: "Paper Cup Machine, All Products",
    icon: "papercup",
    introduction:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit.",
    parameters:
      "Sed posuere consectetur est at lobortis. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.",
    application:
      "Maecenas sed diam eget risus varius blandit sit amet non magna. Donec ullamcorper nulla non metus auctor fringilla.",
    product_description:
      "Curabitur blandit tempus porttitor. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.",
    technical_specification:
      "Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit.",
    optional_add_ons:
      "Sed posuere consectetur est at lobortis. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.",
    faqs: "Maecenas sed diam eget risus varius blandit sit amet non magna. Donec ullamcorper nulla non metus auctor fringilla.",
    related_product:
      "Curabitur blandit tempus porttitor. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.",
  },
  {
    name: "Paper Bowl Machine 01",
    image: "paperBowlMachineImage",
    mimage: paperBowlMachineImage,
    category: "Paper Bowl Machine, All Products",
    icon: "paperbowl",
    introduction:
      "The Paper Bowl Machine 01 is designed for high-volume production of paper bowls, offering precision and efficiency.",
    parameters: "Voltage: 240V, Power: 1800W",
    application:
      "Suitable for producing various sizes of paper bowls, ideal for both hot and cold food items.",
    product_description:
      "This machine is equipped with advanced features for precise bowl forming and stacking, ensuring consistent quality output.",
    technical_specification: "Material: Stainless steel, Weight: 700kg",
    optional_add_ons:
      "Customizable bowl depth and diameter settings available.",
    faqs: "Q: What is the production capacity of this machine? A: It can produce up to 120 bowls per minute.",
    related_product: "Paper Bowl Machine 02, Paper Bowl Machine 03",
  },
  {
    name: "Paper Bowl Machine 02",
    image: "paperBowlMachineImage",
    mimage: paperBowlMachineImage,
    category: "Paper Bowl Machine, mimage: paperBowlMachineImage,All Products",
    icon: "paperbowl",
    introduction:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit.",
    parameters:
      "Sed posuere consectetur est at lobortis. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.",
    application:
      "Maecenas sed diam eget risus varius blandit sit amet non magna. Donec ullamcorper nulla non metus auctor fringilla.",
    product_description:
      "Curabitur blandit tempus porttitor. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.",
    technical_specification:
      "Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit.",
    optional_add_ons:
      "Sed posuere consectetur est at lobortis. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.",
    faqs: "Maecenas sed diam eget risus varius blandit sit amet non magna. Donec ullamcorper nulla non metus auctor fringilla.",
    related_product:
      "Curabitur blandit tempus porttitor. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.",
  },
  {
    name: "Paper Bowl Machine 03",
    image: "paperBowlMachineImage",
    mimage: paperBowlMachineImage,
    category: "Paper Bowl Machine, mimage: paperBowlMachineImage,All Products",
    icon: "paperbowl",
    introduction:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit.",
    parameters:
      "Sed posuere consectetur est at lobortis. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.",
    application:
      "Maecenas sed diam eget risus varius blandit sit amet non magna. Donec ullamcorper nulla non metus auctor fringilla.",
    product_description:
      "Curabitur blandit tempus porttitor. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.",
    technical_specification:
      "Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit.",
    optional_add_ons:
      "Sed posuere consectetur est at lobortis. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.",
    faqs: "Maecenas sed diam eget risus varius blandit sit amet non magna. Donec ullamcorper nulla non metus auctor fringilla.",
    related_product:
      "Curabitur blandit tempus porttitor. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.",
  },
  {
    name: "Paper Bowl Machine 04",
    image: "paperBowlMachineImage",
    mimage: paperBowlMachineImage,
    category: "Paper Bowl Machine, mimage: paperBowlMachineImage,All Products",
    icon: "paperbowl",
    introduction:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit.",
    parameters:
      "Sed posuere consectetur est at lobortis. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.",
    application:
      "Maecenas sed diam eget risus varius blandit sit amet non magna. Donec ullamcorper nulla non metus auctor fringilla.",
    product_description:
      "Curabitur blandit tempus porttitor. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.",
    technical_specification:
      "Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit.",
    optional_add_ons:
      "Sed posuere consectetur est at lobortis. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.",
    faqs: "Maecenas sed diam eget risus varius blandit sit amet non magna. Donec ullamcorper nulla non metus auctor fringilla.",
    related_product:
      "Curabitur blandit tempus porttitor. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.",
  },
  {
    name: "NS-021",
    image: "paperPlateMachineImage",
    mimage: paperPlateMachineImage,

    category: "Paper Plate Machine, All Products",
    icon: "paperplate2",
    introduction:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit.",
    parameters:
      "Sed posuere consectetur est at lobortis. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.",
    application:
      "Maecenas sed diam eget risus varius blandit sit amet non magna. Donec ullamcorper nulla non metus auctor fringilla.",
    product_description:
      "Curabitur blandit tempus porttitor. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.",
    technical_specification:
      "Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit.",
    optional_add_ons:
      "Sed posuere consectetur est at lobortis. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.",
    faqs: "Maecenas sed diam eget risus varius blandit sit amet non magna. Donec ullamcorper nulla non metus auctor fringilla.",
    related_product:
      "Curabitur blandit tempus porttitor. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.",
  },
  {
    name: "NS-022",
    image: "paperPlateMachineImage",
    mimage: paperPlateMachineImage,

    category: "Paper Plate Machine, All Products",
    icon: "paperplate2",
    introduction:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit.",
    parameters:
      "Sed posuere consectetur est at lobortis. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.",
    application:
      "Maecenas sed diam eget risus varius blandit sit amet non magna. Donec ullamcorper nulla non metus auctor fringilla.",
    product_description:
      "Curabitur blandit tempus porttitor. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.",
    technical_specification:
      "Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit.",
    optional_add_ons:
      "Sed posuere consectetur est at lobortis. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.",
    faqs: "Maecenas sed diam eget risus varius blandit sit amet non magna. Donec ullamcorper nulla non metus auctor fringilla.",
    related_product:
      "Curabitur blandit tempus porttitor. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.",
  },
  {
    name: "Cybertruck",
    image: "paperPlateMachineImage",
    mimage: paperPlateMachineImage,

    category: "Paper Plate Machine, All Products",
    icon: "paperplate2",
    introduction:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit.",
    parameters:
      "Sed posuere consectetur est at lobortis. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.",
    application:
      "Maecenas sed diam eget risus varius blandit sit amet non magna. Donec ullamcorper nulla non metus auctor fringilla.",
    product_description:
      "Curabitur blandit tempus porttitor. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.",
    technical_specification:
      "Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit.",
    optional_add_ons:
      "Sed posuere consectetur est at lobortis. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.",
    faqs: "Maecenas sed diam eget risus varius blandit sit amet non magna. Donec ullamcorper nulla non metus auctor fringilla.",
    related_product:
      "Curabitur blandit tempus porttitor. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.",
  },
  {
    name: "Cybertruck2",
    image: "paperPlateMachineImage",
    mimage: paperPlateMachineImage,

    category: "Paper Plate Machine, All Products",
    icon: "paperplate2",
    introduction:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit.",
    parameters:
      "Sed posuere consectetur est at lobortis. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.",
    application:
      "Maecenas sed diam eget risus varius blandit sit amet non magna. Donec ullamcorper nulla non metus auctor fringilla.",
    product_description:
      "Curabitur blandit tempus porttitor. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.",
    technical_specification:
      "Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit.",
    optional_add_ons:
      "Sed posuere consectetur est at lobortis. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.",
    faqs: "Maecenas sed diam eget risus varius blandit sit amet non magna. Donec ullamcorper nulla non metus auctor fringilla.",
    related_product:
      "Curabitur blandit tempus porttitor. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.",
  },
  {
    name: "Paper Flexo Machine",
    image: "paperFlexoMachineImage",
    mimage:paperFlexoMachineImage,
    category: "Paper Flexo Machine, All Products",
    icon: "paperlid",
    introduction:
      "The Paper Flexo Machine is designed for printing on various paper surfaces, offering high-quality print results and flexibility.",
    parameters: "Voltage: 220V, Power: 2000W",
    application:
      "Ideal for printing logos, designs, and labels on paper cups, bowls, and plates.",
    product_description:
      "This machine features a modular design for easy customization and maintenance. It includes precision controls for accurate ink application and drying.",
    technical_specification: "Material: Aluminum alloy, Weight: 800kg",
    optional_add_ons:
      "Additional color printing units available for multi-color designs.",
    faqs: "Q: What is the printing speed of this machine? A: It can print up to 150 meters per minute.",
    related_product: "Paper Flexo Machine 2, Paper Flexo Machine 3",
  },
  {
    name: "Paper Flexo Machine",
    image: "paperFlexoMachineImage",
    mimage:paperFlexoMachineImage,
    category: "Paper Flexo Machine, All Products",
    icon: "paperlid",
    introduction:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit.",
    parameters:
      "Sed posuere consectetur est at lobortis. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.",
    application:
      "Maecenas sed diam eget risus varius blandit sit amet non magna. Donec ullamcorper nulla non metus auctor fringilla.",
    product_description:
      "Curabitur blandit tempus porttitor. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.",
    technical_specification:
      "Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit.",
    optional_add_ons:
      "Sed posuere consectetur est at lobortis. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.",
    faqs: "Maecenas sed diam eget risus varius blandit sit amet non magna. Donec ullamcorper nulla non metus auctor fringilla.",
    related_product:
      "Curabitur blandit tempus porttitor. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.",
  },
  {
    name: "Paper Bag Machine1",
    image: "paperBagMachineImage",
    mimage:paperBagMachineImage,

    category: "Paper Bag Machine, All Products",
    icon: "paperbag1",
    introduction:
      "The Paper Bag Machine1 is designed for automated production of paper bags, offering efficiency and reliability.",
    parameters: "Voltage: 240V, Power: 2200W",
    application:
      "Suitable for producing various sizes and styles of paper bags, including grocery bags and gift bags.",
    product_description:
      "This machine features a robust structure and advanced folding mechanisms, ensuring precise bag formation and strength.",
    technical_specification: "Material: Stainless steel, Weight: 900kg",
    optional_add_ons:
      "Handle attachment unit available as an optional accessory.",
    faqs: "Q: What types of paper can this machine use? A: It is compatible with kraft paper and cardboard materials.",
    related_product: "Paper Bag Machine new, Paper Bag Machine new2",
  },
  {
    name: "Paper Flexo Machine2",
    image: "paperFlexoMachineImage",
    mimage: paperFlexoMachineImage,
    category: "Paper Flexo Machine, All Products",
    icon: "paperlid",
    introduction:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit.",
    parameters:
      "Sed posuere consectetur est at lobortis. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.",
    application:
      "Maecenas sed diam eget risus varius blandit sit amet non magna. Donec ullamcorper nulla non metus auctor fringilla.",
    product_description:
      "Curabitur blandit tempus porttitor. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.",
    technical_specification:
      "Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit.",
    optional_add_ons:
      "Sed posuere consectetur est at lobortis. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.",
    faqs: "Maecenas sed diam eget risus varius blandit sit amet non magna. Donec ullamcorper nulla non metus auctor fringilla.",
    related_product:
      "Curabitur blandit tempus porttitor. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.",
  },
  {
    name: "Paper Flexo Machine3",
    image: "paperFlexoMachineImage",  
      mimage: paperFlexoMachineImage,

    category: "Paper Flexo Machine, All Products",
    icon: "paperlid",
    introduction:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit.",
    parameters:
      "Sed posuere consectetur est at lobortis. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.",
    application:
      "Maecenas sed diam eget risus varius blandit sit amet non magna. Donec ullamcorper nulla non metus auctor fringilla.",
    product_description:
      "Curabitur blandit tempus porttitor. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.",
    technical_specification:
      "Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit.",
    optional_add_ons:
      "Sed posuere consectetur est at lobortis. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.",
    faqs: "Maecenas sed diam eget risus varius blandit sit amet non magna. Donec ullamcorper nulla non metus auctor fringilla.",
    related_product:
      "Curabitur blandit tempus porttitor. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.",
  },
  {
    name: "Paper Bag Machine new",
    image: "fullyAutomaticBagMachineImage",
    mimage: fullyAutomaticBagMachineImage,
    category: "Paper Bag Machine, All Products",
    icon: "paperbag1",
    introduction:
      "The Paper Bag Machine new offers enhanced automation and efficiency for high-volume production of paper bags.",
    parameters: "Voltage: 240V, Power: 2500W",
    application:
      "Ideal for producing grocery bags, shopping bags, and custom-printed promotional bags.",
    product_description:
      "This machine features PLC control for precise operation and real-time monitoring. It includes automated folding and gluing units for seamless bag production.",
    technical_specification: "Material: Stainless steel, Weight: 1000kg",
    optional_add_ons:
      "Handle attachment and printing units available as optional accessories.",
    faqs: "Q: What is the speed of this machine? A: It can produce up to 200 bags per minute.",
    related_product: "Paper Bag Machine1, Paper Bag Machine new2",
  },
  {
    name: "Paper Bag Machine1",
    image: "fullyAutomaticBagMachineImage",
    mimage: fullyAutomaticBagMachineImage,
    category: "Paper Bag Machine, All Products",
    icon: "paperbag1",
    introduction:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit.",
    parameters:
      "Sed posuere consectetur est at lobortis. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.",
    application:
      "Maecenas sed diam eget risus varius blandit sit amet non magna. Donec ullamcorper nulla non metus auctor fringilla.",
    product_description:
      "Curabitur blandit tempus porttitor. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.",
    technical_specification:
      "Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit.",
    optional_add_ons:
      "Sed posuere consectetur est at lobortis. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.",
    faqs: "Maecenas sed diam eget risus varius blandit sit amet non magna. Donec ullamcorper nulla non metus auctor fringilla.",
    related_product:
      "Curabitur blandit tempus porttitor. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.",
  },
  {
    name: "Paper Bag Machine new2",
    image: "fullyAutomaticBagMachineImage",
    mimage:fullyAutomaticBagMachineImage,
    category: "Paper Bag Machine, All Products",
    icon: "paperbag1",
    introduction:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit.",
    parameters:
      "Sed posuere consectetur est at lobortis. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.",
    application:
      "Maecenas sed diam eget risus varius blandit sit amet non magna. Donec ullamcorper nulla non metus auctor fringilla.",
    product_description:
      "Curabitur blandit tempus porttitor. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.",
    technical_specification:
      "Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit.",
    optional_add_ons:
      "Sed posuere consectetur est at lobortis. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.",
    faqs: "Maecenas sed diam eget risus varius blandit sit amet non magna. Donec ullamcorper nulla non metus auctor fringilla.",
    related_product:
      "Curabitur blandit tempus porttitor. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.",
  },
];

export const SidebarLinks = [
  {
    name: "Paper Cup Machine",
    link: "/Paper Cup Machine",
    icon: papercup,
  },
  {
    name: "Paper Bowl Machine",
    link: "/Paper Bowl Machine",
    icon: paperbowl,
  },
  {
    name: "Paper Plate Machine",
    link: "/Paper Plate Machine",
    icon: paperplate2,
  },
  {
    name: "Paper Flexo Machine",
    link: "/Paper Flexo Machine",
    icon: paperlid,
  },
  {
    name: "Paper Bag Machine",
    link: "/Paper Bag Machine",
    icon: paperbag1,
  },
  {
    name: "Paper Straw Machine",
    link: "/Paper Straw Machine",
    icon: paperstraw,
  },
  {
    name: "Paper Lunch Box Machine",
    link: "/Lunch Box Machine",
    icon: paperbag1,
  },
  {
    name: "Paper Cutting Machine",
    link: "/Paper Cutting Machine",
    icon: paperbag1,
  },
  {
    name: "Slitting Machine",
    link: "/Slitting Machine",
    icon: paperbag1,
  },
  {
    name: "Coating Machine",
    link: "/Coating Machine",
    icon: paperbag1,
  },
  {
    name: "Corrugation Machine",
    link: "/Corrugation Machine",
    icon: paperbag1,
  },
  {
    name: "Paper Handle Cup Machine",
    link: "/Paper Handle Cup Machine",
    icon: paperbag1,
  },
  {
    name: "Die Cutting Machine",
    link: "/Die Cutting Machine",
    icon: paperbag1,
  },
  {
    name: "Insulated Cup Machine",
    link: "/Insulated Cup Machine",
    icon: paperbag1,
  },
  {
    name: "Sleeve Making Machine",
    link: "/Sleeve Making Machine",
    icon: paperbag1,
  },
  {
    name: "Paper Cutlery Machine",
    link: "/Paper Cutlery Machine",
    icon: paperbag1,
  },
  {
    name: "Plastic Lid Machine",
    link: "/Plastic Lid Machine",
    icon: paperbag1,
  },
  {
    name: "Paper Bucket Machine",
    link: "/Paper Bucket Machine",
    icon: paperbag1,
  },
  {
    name: "Paper Lid Machine",
    link: "/Paper Lid Machine",
    icon: paperbag1,
  },
  {
    name: "Octagonal Paper Box Forming Machine",
    link: "/Octagonal Paper Box Forming Machine",
    icon: paperbag1,
  },
  {
    name: "Rectangular Flat Bottom Bowl Machine",
    link: "/Rectangular Flat Bottom Bowl Machine",
    icon: paperbag1,
  },
  {
    name: "Rectangular Flat Bottom Bowl Machine (Two Compartment)",
    link: "/Rectangular Flat Bottom Bowl Machine (Two Compartment)",
    icon: paperbag1,
  },
  {
    name: "Carton Erecting Machine",
    link: "/Carton Erecting Machine",
    icon: paperbag1,
  },
];

// support itemm
export const supporItem = [
  { title: "Book a Service", image: BookServiceImage },
  { title: "Genuine Parts", image: BookServiceImage },
  { title: "User Guide", image: BookServiceImage },
  { title: "Machine Warranty", image: BookServiceImage },
  { title: "Additional Item 1", image: BookServiceImage },
  { title: "Additional Item 2", image: BookServiceImage },
  { title: "Additional Item 3", image: BookServiceImage },
  { title: "Additional Item 4", image: BookServiceImage },
  { title: "Additional Item 5", image: BookServiceImage },
];
export const DataBankItem = [
  { title: "Paper Cup Machine", image: paperBagMachineImage },
  { title: "Paper Bowl Machine", image: paperBowlMachineImage },
  { title: "Paper Straw Machine", image: paperPlateMachineImage },
  { title: "Paper Bucket Machine", image: paperStrawMachine },
  { title: "Additional Item 4", image: BookServiceImage },
  { title: "Additional Item 5", image: BookServiceImage },
];

//application item


export interface Item {
  src: StaticImageData;
  alt: string;
  name: string;
  description: string;
  bgpic: StaticImageData;
}

export const item : Item[] =  [
  { src: img1, alt: "Cups", name: "Paper Bowl",
     description: "Ppaer cups are disposable containers made from the paper and often lined with pplatic or wax to prevent liuquid leakage.theu are widely used for bevrages and food indeustry",bgpic:bgimg1 },
  { src: img2, alt: "Item 2", name: "Paper Cups", description: "Set up your paper cup plant with our high-speed machines for efficient, eco-friendly production. Enjoy rapid manufacturing with reduced energy consumption and operational costs. ",bgpic:bgimg2 },
  { src: img3, alt: "Item 3", name: "Paper Bag", description: "Ppaer cups are disposable containers made from the paper and often lined with pplatic or wax to prevent liuquid leakage.theu are widely used for bevrages and food indeustry" ,bgpic:bgimg3},
  { src: img2, alt: "Item 2", name: "Paper Cups", description: "Ppaer cups are disposable containers made from the paper and often lined with pplatic or wax to prevent liuquid leakage.theu are widely used for be",bgpic:bgimg2},
  { src: img1, alt: "Cups", name: "Paper Bowl", description: "Ppaer cups are disposable containers made from the paper and often lined with pplatic or wax to prevent liuquid leakage.theu are widely used for bevrages and food indeustry" ,bgpic:bgimg1},
  { src: img5, alt: "Item 5", name: "Paper Spoon", description:"Ppaer cups are disposable containers made from the paper and often lined with pplatic or wax to prevent liuquid leakage.theu are widely used for bevrages and food indeustry",bgpic:bgimg1 },
  { src: img6, alt: "Item 6", name: "Paper Glass", description: "Ppaer cups are disposable containers made from the paper and often lined with pplatic or wax to prevent liuquid leakage" ,bgpic:bgimg1},
  { src: img4, alt: "Item 4", name: "Paper Bucket", description: "Ppaer cups are disposable containers made from the paper and often lined with pplatic or wax to prevent liuquid leakage.theu are widely used for be" ,bgpic:bgimg3},
  { src: img1, alt: "Cups", name: "Paper Bag", description: "Ppaer cups are disposable containers made from the paper and often lined with pplatic or wax to prevent liuquid leakage.theu are widely used for bevrages and food indeustry",bgpic:bgimg2},
  { src: img3, alt: "Item 3", name: "Paper Bowl", description: "Description for Paper bag Ppaer cups are disposable containers made from the paper and often lined with pplatic or wax to p" ,bgpic:bgimg2},
  { src: img5, alt: "Item 5", name: "Paper Bag", description: "Ppaer cups are disposable containers made from the paper and often lined with pplatic or wax to prevent liuquid leakage.theu are widely used for bevrages and food indeustry",bgpic:bgimg2},
  { src: img4, alt: "Item 4", name: "Paper Spoon", description: "Ppaer cups are disposable containers made from the paper and often lined with pplatic or wax to prevent liuquid leakage.theu are widely used for beper bag" ,bgpic:bgimg2},
  { src: img3, alt: "Item 3", name: "Paper Bag", description: "Ppaer cups are disposable containers made from the paper and often lined with pplatic or wax to prevent liuquid leakage" ,bgpic:bgimg3},
  { src: img2, alt: "Item 2", name: "Paper Cup", description:"Ppaer cups are disposable containers made from the paper and often lined with pplatic or wax to prevent liuquid leakage.theu are widely used for bevrages and food indeustry",bgpic:bgimg2 },
  { src: img1, alt: "Cups", name: "Paper Bowl", description: "Ppaer cups are disposable containers made from the paper and often lined with pplatic or wax to prevent liuquid leakage" ,bgpic:bgimg3},
  { src: img2, alt: "Item 2", name: "Paper Cup", description: "Ppaer cups are disposable containers made from the paper and often lined with pplatic or wax to prevent liuquid leakage.theu are widely used for bevrages and food indeustry",bgpic:bgimg3},
  { src: img3, alt: "Item 3", name: "Paper Plate", description: "Ppaer cups are disposable containers made from the paper and often lined with pplatic or wax to prevent liuquid leakage" ,bgpic:bgimg3},
  { src: img1, alt: "Cups", name: "Paper Bag", description: "Ppaer cups are disposable containers made from the paper and often lined with pplatic or wax to prevent liuquid leakage",bgpic:bgimg3 },
  { src: img3, alt: "Item 3", name: "Paper Cup", description: "Ppaer cups are disposable containers made from the paper and often lined with pplatic or wax to prevent liuquid leakage" ,bgpic:bgimg3},
  { src: img4, alt: "Item 4", name: "Paper Spoon", description: "Ppaer cups are disposable containers made from the paper and often lined with pplatic or wax to prevent liuquid leakage.theu are widely used for bevrages and food indeustry",bgpic:bgimg3 },
  { src: img1, alt: "Cups", name: "Paper Bag", description: "Ppaer cups are disposable containers made from the paper and often lined with pplatic or wax to prevent liuquid leakage" ,bgpic:bgimg3},
  { src: img2, alt: "Item 2", name: "Paper Glass", description: "Ppaer cups are disposable containers made from the paper and often lined with pplatic or wax to prevent liuquid leakage.",bgpic:bgimg3},
  { src: img3, alt: "Item 3", name: "Paper Bag", description: "Ppaer cups are disposable containers made from the paper and often lined with pplatic or wax to prevent liuquid leakage",bgpic:bgimg3},
  { src: img4, alt: "Item 4", name: "Paper Spoon", description: "Ppaer cups are disposable containers made from the paper and often lined with pplatic or wax to prevent liuquid leakage.theu are widely used for bevrages and food indeustry",bgpic:bgimg3 },

];

//solution page
export interface item {
  id: number;
  img: StaticImageData;
  name: string;
  description: string;
}

export const Items:item[] = [
  {
    id: 1,
    name: "All Solutions",
    img: image1,
    description: "Set up your paper cup plant with our high-speed machines for efficient, eco-friendly production. Enjoy rapid manufacturing with reduced energy consumption and operational costs. Invest in advanced technology for sustainable, high-volume output.",
  },
  {
    id: 2,
    name: "Paper Cup Plant setup",
    img: image2,
    description: "Set up your paper cup plant with our high-speed machines for efficient, eco-friendly production.",
  },
  {
      id: 3,
      name: "Raw Material Plant Setup",
      img: image1,
      description: "Set up your paper cup plant with our high-speed machines for efficient, eco-friendly production. ",
    },
    {
      id: 4,
      name: "Printing & Die Cutting setup",
      img: image2,
      description: "Set up your paper cup plant with our high-speed machines for efficient, eco-friendly production. Enjoy rapid manufacturing with reduced energy consumption and operational costs. Invest in advanced technology for sustainable, high-volume output.",
    },
    {
      id: 5,
      name: "Paper Straw Plant Setup",
      img: image1,
      description: "Set up your paper cup plant with our high-speed machines for efficient, eco-friendly production. Enjoy rapid manufacturing with reduced energy consumption and operational costs. Invest in advanced technology for sustainable, high-volume output.",
    },
    {
      id: 6,
      name: "Paper Bag Plant Setup",
      img: image2,
      description: "technology for sustainable, high-volume output.",
    },
    {
      id: 7,
      name: "Paper Plate Plant Setup",
      img: image1,
      description: "Set up your paper cup plant with our high-speed machines for efficient, eco-friendly production. Enjoy rapid manufacturing with reduced energy consumption and operational costs. ",
    },
    {
      id: 8,
      name: "Molds & Die Solutions",
      img: image2,
      description: "Set up your paper cup plant with our high-speed machines for efficient, eco-friendly production. Enjoy rapid manufacturing with reduced energy consumption and operational costs. Invest in advanced technology for sustainable, high-volume output.",
    },
    {
      id: 9,
      name: "Sterio Solutions",
      img: image1,
      description: "Set up your paper cup plant with our high-speed machines for efficient, eco-friendly production. Enjoy rapid manufacturing with reduced energy consumption and operational costs. Invest in advanced technology for sustainable, high-volume output.",
    },
  // Add more items as needed
];

//knowmachine
interface IconProps {
  size?: number;
  className?: string;
}

interface CardContent {
  title: string;
  image: StaticImageData;
  icon: React.ComponentType<IconProps>;
}

export const cardContents: CardContent[] = [
  {
    title: 'Know Your Product',
    image: productImage,
    icon: AiOutlineProduct,
  },
  {
    title: 'Know Your Machine',
    image: machineImage,
    icon: LiaToolsSolid,
  },
  {
    title: 'Know Your Business',
    image: businessImage,
    icon: IoBarChartOutline,
  },
];

//newsfeature

export const newscardcontent = [
  {
    image: machines,
    title: "Revolutionary Speed Unveiled",
  },
  {
    image: banner,
    title: "Excellence Showcased at DRUPA",
  },
  {
    image: banner2,
    title: "Excellence Showcased at FOOMA",
  },
];

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  image: string;
}

export const events: TimelineEvent[] = [
  {
    year: '1990',
    title: 'Our History',
    description: 'Nessco India, founded in 1980, has evolved into a prominent leader in the manufacturing industry. Starting as a small enterprise, the company focused on producing high-quality packaging machinery and equipment. Over the decades, Nessco India has expanded its operations, embracing technological advancements and diversifying its product portfolio to meet the changing needs of the market.',
    image: '/assets/about/nessco-team.webp',
  },
  {
    year: '2000',
    title: 'Expansion',
    description: 'Nessco India, founded in 1980, has evolved into a prominent leader in the manufacturing industry. Starting as a small enterprise, the company focused on producing high-quality packaging machinery and equipment. Over the decades, Nessco India has expanded its operations, embracing technological advancements and diversifying its product portfolio to meet the changing needs of the market.',
    image: '/assets/about/nessco-team.webp',
  },
  {
    year: '2010',
    title: 'Technological Advancements',
    description: 'Nessco India, founded in 1980, has evolved into a prominent leader in the manufacturing industry. Starting as a small enterprise, the company focused on producing high-quality packaging machinery and equipment. Over the decades, Nessco India has expanded its operations, embracing technological advancements and diversifying its product portfolio to meet the changing needs of the market.',
    image: '/assets/about/nessco-team.webp',
  },
];