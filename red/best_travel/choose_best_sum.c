#include "best_travel.h"

int     choose_best_sum(t_parameters *parameters) {
    int     current_sum = 0;
    int     highest_sum = 0;
//    int     *taken_indexes[parameters->number_of_towns_to_visit];

    if (parameters->list_of_distances_size < (int)parameters->number_of_towns_to_visit) {
        printf(ERR_NOT_ENOUGH_DISTANCES);
        return (-1);
    }

    for (int i = 0; i < parameters->number_of_towns_to_visit ; i++) {
        current_sum += parameters->list_of_distances[i];

        for (int j = 0; j < parameters->list_of_distances_size; j++) {
            current_sum += parameters->list_of_distances[j];
        }

        if (highest_sum == parameters->maximum_sum_of_distances)
            return (highest_sum);
        if (current_sum > highest_sum)
            highest_sum = current_sum;
        current_sum = 0;
    }
    return (highest_sum);
}
