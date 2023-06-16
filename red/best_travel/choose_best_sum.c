#include "best_travel.h"

//void    recursion(t_parameters *parameters, t_sum *sum) {
//    for (;sum->k < sum->n;) {
//        for (;(sum->i + sum->k) <= (sum->m - sum->n + sum->k);) {
//            sum->current_sum += parameters->list_of_distances[sum->i + sum->k];
//            sum->i++;
//            if ((sum->i + sum->k) <= (sum->m - sum->n + sum->k))
//                recursion(parameters, sum);
//        }
//        sum->k++;
//        if ((sum->i + sum->k) <= (sum->m - sum->n + sum->k))
//            recursion(parameters, sum);
//    }
//    if (sum->current_sum > sum->highest_sum &&
//        sum->current_sum <= parameters->maximum_sum_of_distances)
//            sum->highest_sum = sum->current_sum;
//
//}

//void    recursion(t_parameters *parameters, t_sum *sum) {
//    for (; sum->i <= (sum->m - sum->n);) { // i+k index!
//        for (;sum->k < sum->n;) {
//            if ((sum->i <= (sum->m - sum->n)) && (sum->k < sum->n)) {
//                sum->current_sum += parameters->list_of_distances[sum->i + sum->k];
//                sum->i++;
//                if (sum->i <= (sum->m - sum->n))
//                    recursion(parameters, sum);
//            }
//            sum->k++;
//            if (sum->k < sum->n)
//                recursion(parameters, sum);
//            else {
//                if (sum->current_sum > sum->highest_sum &&
//                    sum->current_sum <= parameters->maximum_sum_of_distances)
//                    sum->highest_sum = sum->current_sum;
//            }
//        }
//        sum->i++;
//        sum->k = 0;
//        sum->current_sum = 0;
//    }
//}

void swap(int* a, int* b) {
    int temp = *a;
    *a = *b;
    *b = temp;
}

void permute(int *arr, int start, int end) {
    if (start == end) {
        // Base case: Reached the end of the array, print the permutation
        for (int i = 0; i <= end; i++) {
            printf("%d ", arr[i]);
        }
        printf("\n");
    } else {
        // Recursive case: Generate permutations by swapping elements
        for (int i = start; i <= end; i++) {
            swap(&arr[start], &arr[i]);
            permute(arr, start + 1, end);
            swap(&arr[start], &arr[i]);  // Backtrack, restore the original array
        }
    }
}

int     choose_best_sum(t_parameters *parameters) {
    if (parameters->list_of_distances_size < (int)parameters->number_of_towns_to_visit) {
        printf(ERR_NOT_ENOUGH_DISTANCES);
        return (-1);
    }

//    t_sum   sum;
//    sum.highest_sum = 0;
//    sum.current_sum = 0;
//    sum.i = 0;
//    sum.k = 0;
//    sum.s = 0;
//    sum.m = parameters->list_of_distances_size;
//    sum.n = parameters->number_of_towns_to_visit;
//
//    recursion(parameters, &sum);

    //Permutation list generation

    //Get max distance

    return (sum.highest_sum);
}
