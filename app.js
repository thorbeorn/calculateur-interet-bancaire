const { error } = require('console');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
const ask = msg => new Promise(resolve => 
  rl.question(msg, response => resolve(response))
);
const moisAnnee = ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "aout", "septembre", "octobre", "novembre", "décembre"];
// //
function formated_string_tab(raw_str) {
  return new Promise((resolve, reject) => {
    let formated_str = " " + raw_str + " ";
    if(raw_str === undefined || raw_str === null) {
      reject(new Error('Error : formated_string_tab function -> raw_str is undefined or null'));
    }else if(typeof raw_str !== "string") {
      reject(new Error('Error : formated_string_tab function -> raw_str is not a string'));
    }else if(raw_str.length > 22) {
      reject(new Error('Error : formated_string_tab function -> raw_str is to long'));
    }else if(raw_str.length == 0) {
      reject(new Error('Error : formated_string_tab function -> raw_str is to short'));
    };

    for (let index = formated_str.length; index < 24; index++) {
      formated_str += " ";
    };
    resolve(formated_str);
  });
};
function get_mois_par_quinzaine(quinzaine) {
  return new Promise((resolve, reject) => {
    if(quinzaine === undefined || quinzaine === null) {
      reject(new Error('Error : get_mois_par_quinzaine function -> quinzaine is undefined or null'));
    }else if(! Number.isInteger(quinzaine)) {
      reject(new Error('Error : get_mois_par_quinzaine function -> quinzaine is not an integer'));
    }else if(quinzaine > 24) {
      reject(new Error('Error : get_mois_par_quinzaine function -> quinzaine max is 24'));
    }else if(quinzaine == 0) {
      reject(new Error('Error : get_mois_par_quinzaine function -> quinzaine cannot be 0'));
    };

    resolve(moisAnnee[Math.floor(12 - (quinzaine / 2))]);
  });
};
function get_calculated_ajout_par_quinzaine(quinzaine, somme_depart, somme_fixe) {
  return new Promise((resolve, reject) => {
    if(quinzaine === undefined || quinzaine === null) {
      reject(new Error('Error : get_calculated_ajout_par_quinzaine function -> quinzaine is undefined or null'));
    }else if(! Number.isInteger(quinzaine)) {
      reject(new Error('Error : get_calculated_ajout_par_quinzaine function -> quinzaine is not an interger'));
    }else if(quinzaine > 24) {
      reject(new Error('Error : get_calculated_ajout_par_quinzaine function -> quinzaine max is 24'));
    }else if(quinzaine == 0) {
      reject(new Error('Error : get_calculated_ajout_par_quinzaine function -> quinzaine cannot be 0'));
    };

    if(somme_depart === undefined || somme_depart === null) {
      reject(new Error('Error : get_calculated_ajout_par_quinzaine function -> somme_depart is undefined or null'));
    }else if(typeof somme_depart !== "number") {
      reject(new Error('Error : get_calculated_ajout_par_quinzaine function -> somme_depart not a number'));
    }else if(somme_depart == 0) {
      reject(new Error('Error : get_calculated_ajout_par_quinzaine function -> somme_depart cannot be 0'));
    };

    if(somme_fixe === undefined || somme_fixe === null) {
      reject(new Error('Error : get_calculated_ajout_par_quinzaine function -> somme_fixe is undefined or null'));
    }else if(typeof somme_fixe !== "number") {
      reject(new Error('Error : get_calculated_ajout_par_quinzaine function -> somme_fixe not a number'));
    }else if(somme_fixe == 0) {
      reject(new Error('Error : get_calculated_ajout_par_quinzaine function -> somme_fixe cannot be 0'));
    };

    if(quinzaine == 24) {
      resolve(somme_depart);
    } else {
      resolve(somme_fixe);
    };
  });
};
function calculer_interet(valeur, interet, quinzaine) {
  return new Promise((resolve, reject) => {
    if(valeur === undefined || valeur === null) {
      reject(new Error('Error : calculer_interet function -> valeur is undefined or null'));
    }else if(typeof valeur !== "number") {
      reject(new Error('Error : calculer_interet function -> valeur not a number'));
    }else if(valeur == 0) {
      reject(new Error('Error : calculer_interet function -> valeur cannot be 0'));
    };

    if(interet === undefined || interet === null) {
      reject(new Error('Error : calculer_interet function -> interet is undefined or null'));
    }else if(typeof interet !== "number") {
      reject(new Error('Error : calculer_interet function -> interet not a number'));
    }else if(interet == 0) {
      reject(new Error('Error : calculer_interet function -> interet cannot be 0'));
    }else if(interet > 100) {
      reject(new Error('Error : calculer_interet function -> interet cannot be upper than 100'));
    };

    resolve(parseFloat((parseFloat(valeur).toFixed(2) * interet/100 * (quinzaine/24)).toFixed(2)));
  });
};
function check_user_input(userInput, question) {
  return new Promise((resolve, reject) => {
    let inputType = "";
    if(question == 1){
      inputType = "La somme de départ";
    } else if(question == 2) {
      inputType = "La somme ajouter fixement";
    }else if(question == 3) {
      inputType = "Les interet";
    } else {
      reject(new Error("Le numéro de la question n'est pas reconnue"));
    };

    if(userInput === undefined || userInput === null || userInput === "") {
      reject(new Error(`${inputType} ne peux etre vide`));
    }else if(isNaN(userInput)) {
      reject(new Error(`${inputType} doit etre un nombre`));
    };

    resolve(Number(userInput));
  });
}
// //
const ajout_fixe = async (interet, somme_fixe, somme_depart) => {
  let interet_cumule = 0.00;
  let ajout_cumule = 0.00;
  console.log(await formated_string_tab("mois") + "|" + await formated_string_tab("numero de la quinzaine") + "|" + await formated_string_tab("Ajout") + "|" + await formated_string_tab("Interet") + "|" + await formated_string_tab("Ajout cumulé") + "|" + await formated_string_tab("Interet cumulé") + "|");
  for (let index_quinzaine = 24; index_quinzaine != 0; index_quinzaine--) {
    let mois = await get_mois_par_quinzaine(index_quinzaine);
    let calculated_ajout = await get_calculated_ajout_par_quinzaine(index_quinzaine, somme_depart, somme_fixe);
    let calculated_interet = await calculer_interet(calculated_ajout, interet, index_quinzaine);
    ajout_cumule += calculated_ajout;
    interet_cumule += calculated_interet;
    console.log(await formated_string_tab(mois) + "|" + await formated_string_tab(index_quinzaine.toString()) + "|" + await formated_string_tab(calculated_ajout.toFixed(2)) + "|" + await formated_string_tab(calculated_interet.toFixed(2)) + "|" + await formated_string_tab(ajout_cumule.toFixed(2)) + "|" + await formated_string_tab(interet_cumule.toFixed(2)) + "|");
  };
  console.log("total des ajouts cumulé = " + ajout_cumule.toFixed(2));
  console.log("total des interet cumulé = " + interet_cumule.toFixed(2))
  console.log("total des gains sur l'année = " + (ajout_cumule + interet_cumule).toFixed(2))
};
const main = async () => {
  try {
    const raw_somme_depart = await ask("Qu'elle est la somme de départ du compte ? : ");
    const somme_depart = await check_user_input(raw_somme_depart, 1);
    const raw_somme_preleve = await ask("Qu'elle est la somme ajouter fixement par quinzaine ? : ");
    const somme_preleve = await check_user_input(raw_somme_preleve, 2);
    const raw_interet = await ask("Quel est l'interet de ce compte en % ? : ");
    const interet = await check_user_input(raw_interet, 3);
    
    ajout_fixe(interet, somme_preleve, somme_depart)

    rl.close();
  } catch (err){
    console.error(err)
    rl.close();
    return;
  }
  
};
// //
main()