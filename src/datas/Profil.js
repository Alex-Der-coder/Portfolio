const config = require('./config.json');

const cloudinaryCloudName = config.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
const cloudinaryFolder = config.CLOUDINARY_FOLDER;
const cacheDurationInSeconds = 30 * 24 * 60 * 60;



export const Profil = {
    
    cover: `https://res.cloudinary.com/df1z0o9nt/image/upload/s--mFAkFcce--/t_circle_me/Projet_Openclassroom/Alexandre_De-Roeck.jpg`,
};
