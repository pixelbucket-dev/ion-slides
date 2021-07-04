# ion-slides reproducible bug environment

This project demonstrates the bug reported here https://github.com/ionic-team/ionic-framework/issues/21739

The DOM nodes in the slide get updated every 500ms. This seems to clash with the MutationObserver of ion-slides. Potenitally a clash between v-dom and dom updates (race condition). 

To replicate, drag the mouse horizontally very slowly and observe the slight snap bag. It is hard to reproduce. Another way is to start dragging and then stop, but do not release the pointer (mouse-up), which causes the same behaviour.
