#include "best_travel.h"

int main(int argc, char **argv) {
    t_parameters parameters;

    if (!is_input_valid(argc, argv, &parameters))
        return (-1);


    free(parameters.list_of_distances);
    return (0);
}