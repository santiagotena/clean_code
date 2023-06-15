#include "best_travel.h"

int main(int argc, char **argv) {
    t_parameters    parameters;
    int             max_distance;

    if (!is_input_valid(argc, argv, &parameters))
        return (-1);
    max_distance = choose_best_sum(&parameters);
    display_results(max_distance);
    free(parameters.list_of_distances);
    return (0);
}
