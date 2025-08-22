Feature: Login de usuarios actores

  Background:
    Given que estoy en la pantalla de login

  @ux @login
  Scenario: Visualización de formulario
    Then debería ver el formulario de login con campos y botones

  @fn @smoke @login
  Scenario: Login exitoso
    When ingreso mis credenciales y confirmo
    Then debería ingresar al sistema

  @ng @login
  Scenario: Credenciales inválidas muestran error
    When ingreso usuario "00000000000" y contraseña "Wrong123" y cliquear "Aceptar"
    Then debería permanecer en la pantalla de login
    And debería ver un mensaje de error

  @ux @login
  Scenario: Mostrar/Ocultar contraseña
    When escribo "Prueba123!" en el campo contraseña
    And activo el botón de mostrar contraseña
    Then el campo contraseña debe mostrarse en texto
    When desactivo el botón de mostrar contraseña
    Then el campo contraseña debe volver a estar oculto

  @ux @login
  Scenario: Recordar usuario
    When activo "Recordar usuario"
    And escribo "20123456789" en el campo usuario
    And recargo la página de login
    Then el campo usuario debería mantener el valor "20123456789"

  @fn @login
  Scenario: Enlaces auxiliares visibles
    Then debería ver el enlace "Olvidé mi contraseña"
    And debería ver el enlace "Ingreso por primera vez"
