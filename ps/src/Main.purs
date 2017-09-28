module Main where

import Prelude
import Control.Monad.Eff (Eff)
import Control.Monad.Eff.Console (CONSOLE, log)

add :: forall n. Semiring n => n -> n -> n
add a b = a + b

main :: forall e. Eff (console :: CONSOLE | e) Unit
main = do
  log "Hello sailor!"
