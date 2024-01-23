import math

mois = ["janvier", "fevrier", "mars", "avril", "mai", "juin", "juillet", "aout", "septembre", "octobre", "novembre", "decembre"]

def sortie_detaille(initial, ajout, interet, ans) :
  interet_cumule = 0
  ajout_cumule = 0
  total_cumule = 0
  calculated_initial = initial

  print("année           | " + "mois            | " + "quinzaine       | " + "ajout           | " + "interet         | " + "ajout cumulé    | " + "interet cumulé | ")

  for annee in range(1, ans+1, 1) :
    for quinzaine in range(24, 0, -1) :
      text_printed = "{:<15}".format(str(annee)) + " | "
      calculated_ajout = 0
      if quinzaine == 24 :
        calculated_ajout = calculated_initial + ajout
      else :
        calculated_ajout = ajout

      text_printed += "{:<15}".format(str(mois[12 - math.ceil(quinzaine/2)])) + " | " + "{:<15}".format(str(quinzaine)) + " | " + "{:<15}".format(str(calculated_ajout)) + " | " + "{:<15}".format(str(math.ceil((calculated_ajout * (interet/100) * (quinzaine/24)) * 100) / 100))

      interet_cumule += calculated_ajout * (interet/100) * (quinzaine/24)
      if annee == 1 :
        ajout_cumule += calculated_ajout
      else :
        ajout_cumule += ajout
      text_printed += " | " + "{:<15}".format(str(ajout_cumule)) + " | " + "{:<15}".format(str(math.ceil(interet_cumule * 100) / 100)) + "| "

      print(text_printed)

    total_cumule = interet_cumule + ajout_cumule
    calculated_initial = total_cumule
  total_cumule = interet_cumule + ajout_cumule
    
  print("interet_cumule : ", interet_cumule)
  print("ajout_cumule : ", ajout_cumule,)
  print("total_cumule : ", total_cumule)
  return

sortie_detaille(30, 25, 6, 2)