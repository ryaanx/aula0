// Começo conexão com mongo
mongoose
  .connect(
    "mongodb+srv://bellotti:B0ZQODNf8VvZOZEN@cluster0.xyps8.gcp.mongodb.net/logistics?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
    }
  )
  .then((result) => {
    console.log("Database Connected!");
  })
  .catch((error) => {
    console.log(error);
  });

  // Fim conexão com mongo