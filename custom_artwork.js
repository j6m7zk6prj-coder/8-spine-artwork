const artworkModule = {
    id: "diamant-noir-motion",
    name: "Diamant Noir Motion Art",
    author: "j6m7zk6prj-coder",
    version: "1.0.0",
    description: "Pochette animée pour l'album Diamant Noir",
    
    getArtwork: function(track) {
        // Vidéo MP4 de test universelle (100% compatible iOS)
        return "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4";
    }
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = artworkModule;
}
