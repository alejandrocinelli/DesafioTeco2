const errorReq = (req, res) => {
  
    res.json({ error: "Ruta no encontrada" });
  };

    export const configureErrorController = {
        errorReq
    }