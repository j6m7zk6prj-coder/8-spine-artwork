const artworkModule = {
    id: "diamant-noir-motion",
    name: "Diamant Noir Motion Art",
    author: "j6m7zk6prj-coder",
    version: "1.0.0",
    description: "Pochette animée pour l'album Diamant Noir",
    
    getArtwork: function(track) {
        // Lien d'une vraie pochette animée Apple Music certifiée iOS
        return {
            url: "https://v.animatedartwork.com/a/1585250482/1080x1080.mp4",
            isAnimated: true
        };
    }
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = artworkModule;
}
return artworkModule;
