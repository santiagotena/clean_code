#include "best_travel.h"

int main(int argc, char **argv) {
    t_parameters    parameters;
    int             max_distance;

    if (!is_input_valid(argc, argv, &parameters))
        return (-1);
//    max_distance = choose_best_sum(parameters.maximum_sum_of_distances,
//                                   parameters.number_of_towns_to_visit,
//                                   parameters.list_of_distances);
//    display_results(max_distance);
    free(parameters.list_of_distances);
    return (0);
}