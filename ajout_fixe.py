def ajout_fixe(initial, ajout, interet, ans) :
  interet_cumule = 0
  ajout_cumule = 0
  total_cumule = 0
  calculated_initial = initial
  for annee in range(1, ans+1, 1) :
    for quinzaine in range(24, 0, -1) :
      calculated_ajout = 0
      if quinzaine == 24 :
        calculated_ajout = calculated_initial + ajout
      else :
        calculated_ajout = ajout

      interet_cumule += calculated_ajout * (interet/100) * (quinzaine/24)
      if annee == 1 :
        ajout_cumule += calculated_ajout
      else :
        ajout_cumule += ajout

    total_cumule = interet_cumule + ajout_cumule
    calculated_initial = total_cumule
  total_cumule = interet_cumule + ajout_cumule

  calcul_result = {
    "interet_cumule": interet_cumule,
    "ajout_cumule": ajout_cumule,
    "total_cumule": total_cumule
  }
  return calcul_result

print(ajout_fixe(30, 25, 6, 2))