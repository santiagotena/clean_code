#include "best_travel.h"

void    recursion(t_parameters *parameters, t_sum *sum) {

    for (; sum->i <= (sum->m - sum->n);) { // i+k index!
        for (;sum->k < sum->n;) {
            if ((sum->i <= (sum->m - sum->n)) && (sum->k < sum->n))
                sum->current_sum += parameters->list_of_distances[sum->i + sum->k];
            sum->k++;
            if (sum->k < sum->n)
                recursion(parameters, sum);
            else {
                if (sum->current_sum > sum->highest_sum &&
                    sum->current_sum <= parameters->maximum_sum_of_distances)
                    sum->highest_sum = sum->current_sum;

//                sum->k = 0;
//                if (sum->i > (sum->m - sum->n))
//                    break;
            }
        }
        sum->i++;
//        if (sum->i <= (sum->m - sum->n))
//            break;
        sum->k = 0;
        sum->current_sum = 0;
//        else {
//            break;
//        }
//        if (sum->i <= (sum->m - sum->n))
//                recursion(parameters, sum);
//        if (sum->k < sum->n)
    }

//    if (sum->current_sum > sum->highest_sum &&
//        sum->current_sum <= parameters->maximum_sum_of_distances)
//            sum->highest_sum = sum->current_sum;
//        sum->current_sum = 0;
//        sum->k = 0;
//    sum->i++;
//    if (sum->i <= (sum->m - sum->n))
//        recursion(parameters,sum);
}
//    if (sum->i <= (sum->m - sum->n) && (sum->k < sum->n))

int     choose_best_sum(t_parameters *parameters) {
    if (parameters->list_of_distances_size < (int)parameters->number_of_towns_to_visit) {
        printf(ERR_NOT_ENOUGH_DISTANCES);
        return (-1);
    }

    t_sum   sum;
    sum.highest_sum = 0;
    sum.current_sum = 0;
    sum.i = 0;
    sum.k = 0;
    sum.m = parameters->list_of_distances_size;
    sum.n = parameters->number_of_towns_to_visit;

    recursion(parameters, &sum);

    return (sum.highest_sum);
}
