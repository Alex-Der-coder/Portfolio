const config = require('./config.json');

const cloudinaryCloudName = config.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
const cloudinaryFolder = config.CLOUDINARY_FOLDER;

export const CoverList = {
    kasa: `https://res.cloudinary.com/${cloudinaryCloudName}/image/upload/t_Projet_Portfolio/${cloudinaryFolder}/kasa.webp`,
    hottakes: `https://res.cloudinary.com/${cloudinaryCloudName}/image/upload/t_Projet_Portfolio/${cloudinaryFolder}/hottakes.png`,
    kanap: `https://res.cloudinary.com/${cloudinaryCloudName}/image/upload/t_Projet_Portfolio/${cloudinaryFolder}/kanap.png`,
    lapanthere: `https://res.cloudinary.com/${cloudinaryCloudName}/image/upload/t_Projet_Portfolio/${cloudinaryFolder}/lapanthere.png`,
    ohmyfood: `https://res.cloudinary.com/${cloudinaryCloudName}/image/upload/t_Projet_Portfolio/${cloudinaryFolder}/ohmyfood.png`,
    booki: `https://res.cloudinary.com/${cloudinaryCloudName}/image/upload/t_Projet_Portfolio/${cloudinaryFolder}/booki.png`,
    lmj: `https://res.cloudinary.com/${cloudinaryCloudName}/image/upload/t_Projet_Portfolio/${cloudinaryFolder}/booki_react.png`,
    typewritter: `https://res.cloudinary.com/${cloudinaryCloudName}/image/upload/t_Projet_Portfolio/${cloudinaryFolder}/typewritter.png`,
    Porteflio: `https://res.cloudinary.com/${cloudinaryCloudName}/image/upload/t_Projet_Portfolio/${cloudinaryFolder}/kanap.png`,
    gba: `https://res.cloudinary.com/${cloudinaryCloudName}/image/upload/t_Projet_Portfolio/${cloudinaryFolder}/gba.png`,
};

