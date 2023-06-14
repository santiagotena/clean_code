#include "best_travel.h"

int     choose_best_sum(t_parameters *parameters) {
    int     highest_sum = 0;

    if (parameters->list_of_distances_size < (int)parameters->number_of_towns_to_visit) {
        printf(ERR_NOT_ENOUGH_DISTANCES);
        return (-1);
    }

//    for (int i = 0; i < number_of_towns_to_visit ; i++) {
//        for (int j = 0; j < list_of_distances_size; ++j) {
//            if ()
//
//        }
//
//        if (highest_sum == maximum_sum_of_distances)
//            return (highest_sum);
//    }


    //Save indexes
    return (highest_sum);
}
