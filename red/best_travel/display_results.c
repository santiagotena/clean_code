#include "best_travel.h"

void    display_results(int max_distance) {
    if (max_distance == -1) {
        printf(ERR_NOT_ENOUGH_DISTANCES);
        return;
    }
    printf("Max distance: %i\n", max_distance);

}
