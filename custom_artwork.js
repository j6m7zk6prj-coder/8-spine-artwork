const artworkModule = {
    id: "diamant-noir-motion",
    name: "Diamant Noir Motion Art",
    author: "j6m7zk6prj-coder",
    version: "1.0.0",
    description: "Pochette animée pour l'album Diamant Noir",
    
    getArtwork(track) {
        const targetAlbum = "Diamant Noir";
        const videoUrl = "https://raw.githubusercontent.com/j6m7zk6prj-coder/8-spine-artwork/main/P1064659254_Anull_video_gr290_sdr_1080x1440-.mp4";

        if (track && track.album && track.album.toLowerCase() === targetAlbum.toLowerCase()) {
            return videoUrl;
        }
        
        return null;
    }
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = artworkModule;
}
