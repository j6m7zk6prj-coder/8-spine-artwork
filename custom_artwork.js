const artworkModule = {
    id: "diamant-noir-motion",
    name: "Diamant Noir Motion Art",
    author: "j6m7zk6prj-coder",
    version: "1.0.0",
    description: "Pochette animée pour l'album Diamant Noir",
    type: "animated_artwork",

    // Fonction standard pour la pochette animée
    getAnimatedArtwork: function(track) {
        return {
            url: "https://cdn.jsdelivr.net/gh/j6m7zk6prj-coder/8-spine-artwork@main/P1064659254_Anull_video_gr290_sdr_1080x1440-.mp4",
            type: "video/mp4"
        };
    },

    // Méthode fallback si 8SPINE appelle getArtwork
    getArtwork: function(track) {
        return {
            url: "https://cdn.jsdelivr.net/gh/j6m7zk6prj-coder/8-spine-artwork@main/P1064659254_Anull_video_gr290_sdr_1080x1440-.mp4",
            type: "video/mp4"
        };
    }
};

// Export requis pour l'orchestrateur JavaScript de 8SPINE
if (typeof module !== 'undefined' && module.exports) {
    module.exports = artworkModule;
}
return artworkModule;
