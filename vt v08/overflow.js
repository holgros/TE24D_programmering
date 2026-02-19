// En present som alltid innehåller en mindre present...
function oppnaPresent(presentStorlek) {
    console.log(`📦 Öppnar en ${presentStorlek} present...`);
    
    // Basfall som aldrig inträffar (glömt! 😱)
    if (presentStorlek === "liten") return "En fin liten ring!"
    
    // Rekursivt anrop - ALLTID en mindre present
    return oppnaPresent("ännu mindre");
}

// Testa att öppna presenten
try {
    console.log(oppnaPresent("STOR"));
} catch (error) {
    console.log("💥 KRASCH! Högen är full av presenter!");
    console.log("Felmeddelande: " + error.message);
    console.log("\nMoral: Glöm inte BASFALLET när du använder rekursion!");
}