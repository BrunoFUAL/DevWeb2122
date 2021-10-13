exports.create = (req, res) => {
    console.log("Create");
    if (!req.body) {
      return res.status(400).send({
        message: "O conteúdo não pode ser vazio!",
      });
    }
    return res.send({
      message: "Criou um novo registo!",
    });
  };

exports.findAll = (req, res) => {
    console.log("FindAll");  
    if (!req.body) {
        return res.status(400).send({
          message: "Não existem registos",
        });
      }
      return res.send({
        message: "Registos Consultados na totalidade!",
      });
    };

exports.findOne = (req, res) => {
    console.log("FindOne");  
    if (!req.body) {
        return res.status(400).send({
            message: "Registo não localizado",
            });
          }
          return res.send({
            message: "Registo localizado!",
          });
        };

exports.update = (req, res) => {
    console.log("Update");  
    if (!req.body) {
        return res.status(400).send({
            message: "Registo não localizado",
             });
            }
            return res.send({
             message: "Registo modificado!",
             });
         }; 
                
                
exports.delete = (req, res) => {
    console.log("Delete");  
    if (!req.body) {
        return res.status(400).send({
            message: "Registo não localizado",
             });
           }
          return res.send({
          message: "Registo eliminado!",
             });
         };

exports.delete = (req, res) => {
    console.log("Delete");  
    if (!req.body) {
         return res.status(400).send({
            message: "Registo não localizado",
             });
           }
        return res.send({
            message: "Registo eliminado!",
           });
     };         
    
exports.deleteAll = (req, res) => {
        console.log("DeleteAll");  
         if (!req.body) {
             return res.status(400).send({
                   message: "Registos não localizados",
                   });
                }
                 return res.send({
                 message: "Registos eliminados!",
                 });
             }; 
             
exports.findAllMarked = (req, res) => {
    console.log("FindAll");  
        if (!req.body) {
            return res.status(400).send({
              message: "Registos não localizados",
              });
         }
          return res.send({
          message: "Registos localizados!",
          });
     };             