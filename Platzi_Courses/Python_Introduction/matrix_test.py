from random import randint
numeros = [[1, 2, 3],
           [4, 5, 6],
           [7, 8, 9]]
print(numeros)

fila = 3
columna = 3
a = [[randint(1, 100) for i in range(fila)] for j in range(columna)]
example = [x*x for x in range(1, 10)]
example2 = [5 for x in range(5, 10)]
print(example)
print(example2)
print(a)

for f in range(fila):
    for c in range(columna):
        print(a[f][c], end=' ')
    print()

for f in a:
    print(f)

print(a[0][0])

matriz = []

for i in range(3):
    matriz.append([0]*3)

matriz[0][0] = 10
print(matriz)