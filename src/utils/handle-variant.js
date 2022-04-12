import Variant from '../enumerations/variant';

const handleVariant = variant => {
    switch (variant) {
        case Variant.SOLID:
            return 'bg-rose-600 text-stone-50';
        case Variant.OUTLINE:
            return 'bg-stone-50 border border-rose-600 text-rose-600';
        case Variant.TEXT:
            return 'bg-stone-50 text-rose-600';
        default:
            return 'bg-rose-600 text-stone-50';
    }
};

export {handleVariant};
