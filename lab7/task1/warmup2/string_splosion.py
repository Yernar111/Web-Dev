def string_splosion(str):
  str1=""
  for i in range(len(str)):
    str1+=str[:i+1]
  return str1