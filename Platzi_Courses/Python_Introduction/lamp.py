class Lamp:
    _LAMPS = ['''The lamp is turn on Now!
          .
     .    |    ,
      \   '   /
       ` ,-. '
    --- (   ) ---
         \ /
        _|=|_
       |_____|
    ''',
              '''The lamp is turn off Now!
                   ,-.
                  (   )
                   \ /
                  _|=|_
                 |_____|
              ''']

    def __init__(self, initial_state):
        self._estate = initial_state
        if initial_state:
            print(self._LAMPS[0])
        else:
            print(self._LAMPS[1])

    def turn_on(self):
        if self._estate:
            print("The lamp is already on!\n")
        else:
            self._estate = True
            self._show_lamp()  # Las funcines privadas son solo para usarla dentro de la misma clase

    def turn_off(self):
        if not self._estate:
            print("The lamp is already off!\n")
        else:
            self._estate = False
            self._show_lamp()

    def _show_lamp(
            self):  # El metodo es privado porque no queremos que los usuarios a su gusto pueda desplegar la lampara
        if self._estate:
            print(self._LAMPS[0])
        else:
            print(self._LAMPS[1])


lamp1 = Lamp(False)

while True:
    option = int(input("""Choose an option: 
    1. Turn on the lamp
    2. Turn off the lamp
    3. Exit"""))

    if option == 1:
        lamp1.turn_on()
    elif option == 2:
        lamp1.turn_off()
    else:
        break
