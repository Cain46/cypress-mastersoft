Feature: Login - Exitoso
  Background:
    Given que estoy en la pantalla de login

  @smoke @login
  Scenario: Ingreso correcto con credenciales válidas
    When ingreso mis credenciales y confirmo
    Then debería ingresar al sistema
