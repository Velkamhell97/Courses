"""
A pesar de que las listas y tuplas son estruturas similares tienen algunas diferencias; las listas son arreglos dinamicos
es decir que el valor de sus elementos y su tamaño se puede modificar en cualquier parte del codigo, caso contrario ocurre
con las tuplas cuyos valores no pueden ser modificados al igual que su tamaño, estas diferencias son las que permiten que
una estructura sea mas eficiente que otra para determinadas acciones, por ejemplo si ni los valores del arreglo ni su longitud
se va a modificar en el codigo puede crearse una tupla, por otra parte si es necesario actualizar el valor de un arreglo o
agregar mas elementos es mas recomendable crear una lista.

Ahora bien en cuanto al acceso de los elementos dentro del arreglo son mas rapidas las listas, ya que estan precisamente
diseñadas para que se puedan recorrer sus valores y actualizarlos si es necesario, mientras que las tuplas, generalmente
son usadas como un tipo de constantes de las cuales sus valores se conocen y no se piensan actualizar.

Hablando en cuanto a listas, la compresion de listas son mas rapidas que las funciones filter o map, igualmente ocurre
con los diccionarios, resulta ser un metodo mas eficienete, para ver ejemplos ir al archivo tuples.ipnyb, otra cosa a tener en cuenta
es la funcion enumerate en la cual podemos obtener el indice y el valor de una lista y la funcion zip, que permite recorrer dos arreglos
simultaneamente
"""
import timeit
import bisect

creacion_lista = "lista = [1, 2, 3, 4, 5]"
creacion_tupla = "tupla = (1, 2, 3, 4, 5)"
creacion_set = "set1 = {1, 2, 3, 4, 5}"
print(f"La creacion de lista tomo: {timeit.timeit(creacion_lista, number=10000)}")
print(f"La creacion de tupla tomo: {timeit.timeit(creacion_tupla, number=10000)}")
print(f"La creacion de set tomo: {timeit.timeit(creacion_set, number=10000)}") # La creacion de la lista es mas rapida
print(f"La busqueda en lista tomo: {timeit.timeit('3 in lista','lista = [1, 2, 3, 4, 5]',number=10000)}")
print(f"La busqueda en tupla tomo: {timeit.timeit('3 in tupla','tupla = (1, 2, 3, 4, 5)',number=10000)}")
print(f"La busqueda en set tomo: {timeit.timeit('3 in set1','set1 = {1, 2, 3, 4, 5}',number=10000)}")

prueba_lista1 = """
def test():
    lista = [48,14,68,19,90,66,62,93,35,17,16,72,52,12,1,56,46,70,77,37,42,31,63,61,96,89,65,25,27,87,50,40,79,29,18,53,98,44,5,69,64,39,91,33,36,8,32,54,75,73]
    for l in lista:
        print(l)
"""
prueba_lista2 = """
def test2():
    lista = [48,14,68,19,90,66,62,93,35,17,16,72,52,12,1,56,46,70,77,37,42,31,63,61,96,89,65,25,27,87,50,40,79,29,18,53,98,44,5,69,64,39,91,33,36,8,32,54,75,73]
    if 99 in lista:
        print(True)
"""
prueba_tupla1 = """
def test():
    tupla = (48,14,68,19,90,66,62,93,35,17,16,72,52,12,1,56,46,70,77,37,42,31,63,61,96,89,65,25,27,87,50,40,79,29,18,53,98,44,5,69,64,39,91,33,36,8,32,54,75,73)
    for t in tupla:
        print(t)
"""
prueba_tupla2 = """
def test2():
    tupla = (48,14,68,19,90,66,62,93,35,17,16,72,52,12,1,56,46,70,77,37,42,31,63,61,96,89,65,25,27,87,50,40,79,29,18,53,98,44,5,69,64,39,91,33,36,8,32,54,75,73)
    if 99 in tupla:
        print(True)
"""
print(f"La prueba 1 de la lista tomo: {timeit.timeit(prueba_lista1, number=10000)}")
print(f"La prueba 1 de la tupla tomo: {timeit.timeit(prueba_tupla1, number=10000)}")
print(f"La prueba 2 de la lista tomo: {timeit.timeit(prueba_lista2, number=10000)}")
print(f"La prueba 2 de la tupla tomo: {timeit.timeit(prueba_tupla2, number=10000)}")

prueba_lista3 = """
def busqueda_lineal():
    lista = [48,14,68,19,90,66,62,93,35,17,16,72,52,12,1,56,46,70,77,37,42,31,63,61,96,89,65,25,27,87,50,40,79,29,18,53,98,44,5,69,64,39,91,33,36,8,32,54,75,73]
    for i, v in enumerate(lista):
        if v == 33:
            return i
    return -1
"""
prueba_tupla3 = """
def busqueda_lineal():
    tupla = (48,14,68,19,90,66,62,93,35,17,16,72,52,12,1,56,46,70,77,37,42,31,63,61,96,89,65,25,27,87,50,40,79,29,18,53,98,44,5,69,64,39,91,33,36,8,32,54,75,73)
    for i, v in enumerate(tupla):
        if v == 33:
            return i
    return -1
"""
prueba_lista4 = """
def busqueda_index():
    lista = [48,14,68,19,90,66,62,93,35,17,16,72,52,12,1,56,46,70,77,37,42,31,63,61,96,89,65,25,27,87,50,40,79,29,18,53,98,44,5,69,64,39,91,33,36,8,32,54,75,73]
    print(lista.index(33))
"""
prueba_tupla4 = """
def busqueda_index():
    tupla = (48,14,68,19,90,66,62,93,35,17,16,72,52,12,1,56,46,70,77,37,42,31,63,61,96,89,65,25,27,87,50,40,79,29,18,53,98,44,5,69,64,39,91,33,36,8,32,54,75,73)
    print(tupla.index(33))
"""
prueba_lista5 = """
def busqueda_compresion():
    lista = [48,14,68,19,90,66,62,93,35,17,16,72,52,12,1,56,46,70,77,37,42,31,63,61,96,89,65,25,27,87,50,40,79,29,18,53,98,44,5,69,64,39,91,33,36,8,32,54,75,73]
    index = [i for i,v in enumerate(lista) if v == 33]
    print(index[0])
"""
prueba_tupla5 = """
def busqueda_index():
    tupla = (48,14,68,19,90,66,62,93,35,17,16,72,52,12,1,56,46,70,77,37,42,31,63,61,96,89,65,25,27,87,50,40,79,29,18,53,98,44,5,69,64,39,91,33,36,8,32,54,75,73)
    index = tuple(i for i,v in enumerate(tupla) if v == 33)
    print(index[0])
"""
prueba_lista6 = """
def busqueda_compresion():
    lista = [48,14,68,19,90,66,62,93,35,17,16,72,52,12,1,56,46,70,77,37,42,31,63,61,96,89,65,25,27,87,50,40,79,29,18,53,98,44,5,69,64,39,91,33,36,8,32,54,75,73]
    lista.sort() #Es mejor organizar los objetos con sort y no con sorted
    index = bisect.bisect_left(lista,33)
    print(index)
"""
prueba_lista7 = """
def lista_default():
    lista = [] # para chequear si una lista o cualquier estructura de datos esta vacia podemos usar if not lista/tupla/set:
    for i in range(11):
        lista[i] = i*i
    return lista
"""
prueba_lista8 = """
def lista_default():
    lista = list(map(lambda x : x*x, range(11)))
    return lista
"""
prueba_lista9 = """
def lista_default():
    lista = [x*x for x in range(11)]
    return lista
"""
prueba_lista10 = """
def test():
    sum = 0
    N = 10
    for x in range(1, N+1):
        sum += x
    return sum
"""
#Tambien podemos buscar las relaciones entre los ciclos para ver si se puede simplificar en una expresion
prueba_lista11 = """
def test():
    N = 10
    sum = N * (1 + N) / 2
    return suma
"""
prueba_lista12 = """
def test():
    output = []
    for element in range(100):
        output.append(element*element)
    return output
"""
prueba_lista13 = """
def test():
    output = []
    append = output.append
    for element in range(100):
        append(element*element)
    return output
"""


print(f"La prueba 3 de la lista tomo: {timeit.timeit(prueba_lista3, number=10000)}")
print(f"La prueba 3 de la tupla tomo: {timeit.timeit(prueba_tupla3, number=10000)}")
print(f"La prueba 4 de la lista tomo: {timeit.timeit(prueba_lista4, number=10000)}")
print(f"La prueba 4 de la tupla tomo: {timeit.timeit(prueba_tupla4, number=10000)}")
print(f"La prueba 5 de la lista tomo: {timeit.timeit(prueba_lista5, number=10000)}")
print(f"La prueba 5 de la tupla tomo: {timeit.timeit(prueba_tupla5, number=10000)}")
print(f"La prueba 6 de la lista tomo: {timeit.timeit(prueba_lista6, number=10000)}")
print(f"La prueba 7 de la lista tomo: {timeit.timeit(prueba_lista7, number=10000)}")
print(f"La prueba 8 de la tupla tomo: {timeit.timeit(prueba_lista8, number=10000)}")
print(f"La prueba 9 de la lista tomo: {timeit.timeit(prueba_lista9, number=10000)}")
print(f"La prueba 10 de la tupla tomo: {timeit.timeit(prueba_lista10, number=10000)}")
print(f"La prueba 11 de la lista tomo: {timeit.timeit(prueba_lista11, number=10000)}")
print(f"La prueba 12 de la tupla tomo: {timeit.timeit(prueba_lista12, number=10000)}")
print(f"La prueba 13 de la lista tomo: {timeit.timeit(prueba_lista13, number=10000)}")

"""
Para el caso de los condicionales existen declaraciones que pueden ahorrar procesos o llamdas a subtareas, aqui hay unos ejemplos
"""

prueba_condicional1 = """
def test():
    x = True
    if x == True:
        print("nice")
    else:
        print("Bad")
"""
prueba_condicional2 = """
def test():
    x = True
    if x:
        print("nice")
    else:
        print("Bad")
"""
prueba_condicional3 = """
def test():
    y = 18
    x = 0
    if y >= 18:
        x = 1
    else:
        x = 0
"""
prueba_condicional4 = """
def test():
    y = 18
    x = 1 if y >= 18 else 0
"""
prueba_condicional5 = """
def test():
    to_search = 'd'
    lista = ['a','b','c']
    found = False
    for i in lista:
        if to_search == i:
            found = True
            break
    else:
        found = False
    print(f"the search result is: {found}") 
"""
prueba_condicional6 = """
def test():
    to_search = 'd'
    lista = ['a','b','c']
    found = True if to_search in lista else False
    print(f"the search result is: {found}") 
"""

print(f"La prueba 1 del condicional tomo: {timeit.timeit(prueba_condicional1, number=10000)}")
print(f"La prueba 2 del condicional tomo: {timeit.timeit(prueba_condicional2, number=10000)}")
print(f"La prueba 3 del condicional tomo: {timeit.timeit(prueba_condicional3, number=10000)}")
print(f"La prueba 4 del condicional tomo: {timeit.timeit(prueba_condicional4, number=10000)}")
print(f"La prueba 5 del condicional tomo: {timeit.timeit(prueba_condicional5, number=10000)}")
print(f"La prueba 6 del condicional tomo: {timeit.timeit(prueba_condicional6, number=10000)}")

"""
Otro elemento que no se le da mucha importancia pero que puede a llegar a ser muy util son los sets, un arreglo ideal para hacer operaciones entre conjuntos como
union, interseccion, diferencia, diferencia simetrica etc, los metodos que ofrece esta clase son mas rapdios que si se implementaran manualmente en una lista, 
tambien se debe tener en cuenta que los sets no aceptan valores repetidos y podria ser util en algunas situaciones
"""

prueba_set1 = """
def test():
    lista = [10,32,45,67,11,32,67]
    for i in lista:
        if lista3.count(i) > 1:
            lista.remove(i)
    return lista
"""
prueba_set2 = """
def test():
    set1 = {10,32,45,67,11,32,67}
    return set1
"""
prueba_set3 = """
def test():
    lista = [10,32,45,67,11]
    lista2 = [13,17,45,90,67,10]
    lista3 = lista + lista2
    lista_final = []
    for x in lista3:
        if x not in lista_final:
            lista_final.append(x)
    #for i in lista3:
    #    if lista.count(i) > 1:
    #        lista3.remove(i)
    
    return lista_final
"""
prueba_set4 = """
def test():
    set1 = {10,32,45,67,11}
    set2 = {13,17,45,90,67,10}
    set3 = set1.union(set2)
    return set3
"""
prueba_set5 = """
def test():
    lista = [10,32,45,67,11]
    lista2 = [13,17,45,90,67,10]
    lista3 = [i for i in lista2 if i in lista]
    #for i, j in zip(lista, lista2):
    #    if lista i == j:
    #        lista3.append(i)
    return lista3
"""
prueba_set6 = """
def test():
    set1 = {10,32,45,67,11}
    set2 = {13,17,45,90,67,10}
    set3 = set1.intersection(set2)
    return set3
"""

print(f"La prueba 1 de los sets tomo: {timeit.timeit(prueba_set1, number=10000)}")
print(f"La prueba 2 de los sets tomo: {timeit.timeit(prueba_set2, number=10000)}")
print(f"La prueba 3 de los sets tomo: {timeit.timeit(prueba_set3, number=10000)}")
print(f"La prueba 4 de los sets tomo: {timeit.timeit(prueba_set4, number=10000)}")
print(f"La prueba 5 de los sets tomo: {timeit.timeit(prueba_set5, number=10000)}")
print(f"La prueba 6 de los sets tomo: {timeit.timeit(prueba_set6, number=10000)}")


"""Una de las formas de ahorrar algo de tiempo al momento de asignar variables es usar la asignacion de multiples variables, separadas por coma, esto se puede usar
igualmente en una funcion cuando se quiere retornar multiples valores (ver archivo de funciones)
"""

prueba_multiple1 = """
x = 10
y = -10
temp = y
y = x
x = temp
"""
prueba_multiple2 = """
x = 10
y = -10
x, y = y, x
"""

x, y, *z = (1, 2, 3, 4, 5)
a, b, *_ = (6, 7, 8, 9, 10)
i, j, *k, f = (12, 13, 14, 15, 16, 17)

print(f"La prueba 1 de los mutiples tomo: {timeit.timeit(prueba_multiple1, number=10000)}")
print(f"La prueba 2 de los multiples tomo: {timeit.timeit(prueba_multiple2, number=10000)}")
print(f"the x = {x}, the y = {y} and the z = {z}")
print(f"the a = {a}, the b = {b}")
print(f"the i = {i}, the j = {j}, the k = {k} and the f = {f}")

"""En cuanto a los diccionarios se aplican varias de las reglas vistas con las lista, procurar utilzar la compresion de diccionarios para una mas rapida creacion
utilizar los metodos .values y .keys para acceder mas rapido a un dato especifico y en vez de enumerate se puede usar el metodo .items para acceder a ambos valores
al tiempo en un solo ciclo, ademas de contar con metodos que pueden buscar un valor y asignar un valor si este no se encuentra (.get)"""

"""Al momento de trabajar con archivos uno de las funciones mas utiles es open, que se utiliza con with, esto evita la necesidad de cerrar el archivo al momento 
que se deja de trabajar en el"""

"""El manejo de errores y las declaraciones como try y except sirven para que el programa no falle al realizar alguna comparacion de la cual no estamos seguros
que el programa admita, por lo tanto utilzar estos keywords permite que podamos evaluar rapidamente el resultado de una operacion sin temor a que el programa falle
el else del try, catch sirve solo para cuando no ocurre el except, es decir que es algo que hacemos unicamente cuando el try funciona, por otra parte, el finally
si ejecuta lo que haya en su interior sea cual sea la opcion que haya ocurrido, es decir, try o catch"""

"""Puede agregarse formato a los numeros para que sean mas legibles"""
num1 = 10000000000
num2 = 100000000
total1 = num1+num2
print(f"{total1:,}")

num3 = 10_000_000_000
num4 = 100_000_000
total2 = num3+num4
print(f"{total2:,}")

num5 = 123456.323423
print(f"{num5:0,.2f}")

"""Tener en cuenta tambien la encapsulasion en las clases y los hash al momento de crear contratseñas, el modulo getpass es tambien utilizado para estos fines"""
"""Existen modulos de python que ayudan a mejorar la velocidad de compilacion, y el manejo de los recursos, algunas de esos son itertools, collections, numpy"""

contacts = [('daniel', '3153159064'), ('juan', '3143154433'), ('monica', '1231233444')]
for name, number in contacts:
    print(f"the number of {name} is {number}")

"""
otro tips de eficiencia es no sumar strings, mejor utilizar el metodo join
*podemos usar while 1 en vez de while True
cuando usamos el re podemos compilar el resutado antes que entre al ciclo

"""