Feature: Login - Negativo
  Background:
    Given que estoy en la pantalla de login

  @ng @login
  Scenario: Credenciales inválidas muestran error
    When ingreso usuario "00000000000" y contraseña "Wrong123" y cliquear "Aceptar"
    Then debería permanecer en la pantalla de login
    And debería ver un mensaje de error
