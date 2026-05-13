---
source_path: "documentation/Accelerate/vimagepiecewiserational-planarf.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/vimagepiecewiserational-planarf"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:vimagepiecewiserationalplanarf:0000:0001">vImagePiecewiseRational_PlanarF(_:_:_:_:_:_:_:_:_:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:vimagepiecewiserationalplanarf:0001:0001">**Framework**: Accelerate **Kind**: func</span>

<span class="ko-segment" data-segment-id="seg:paragraph:vimagepiecewiserationalplanarf:0002:0001">Applies a set of piecewise rational expressions to transform a 32-bit planar image.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:vimagepiecewiserationalplanarf:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:vimagepiecewiserationalplanarf:0004:0001">iOS 5.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:vimagepiecewiserationalplanarf:0004:0002">iPadOS 5.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:vimagepiecewiserationalplanarf:0004:0003">Mac Catalyst 13.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:vimagepiecewiserationalplanarf:0004:0004">macOS 10.4+</span>
- <span class="ko-segment" data-segment-id="seg:list:vimagepiecewiserationalplanarf:0004:0005">tvOS 5.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:vimagepiecewiserationalplanarf:0004:0006">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:vimagepiecewiserationalplanarf:0004:0007">watchOS 1.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
func vImagePiecewiseRational_PlanarF(_ src: UnsafePointer<vImage_Buffer>, _ dest: UnsafePointer<vImage_Buffer>, _ topCoefficients: UnsafeMutablePointer<UnsafePointer<Float>?>, _ bottomCoefficients: UnsafeMutablePointer<UnsafePointer<Float>?>, _ boundaries: UnsafePointer<Float>, _ topOrder: UInt32, _ bottomOrder: UInt32, _ log2segments: UInt32, _ flags: vImage_Flags) -> vImage_Error
```

#### <span class="ko-segment" data-segment-id="seg:heading:return-value:0007:0001">Return Value</span>

<span class="ko-segment" data-segment-id="seg:paragraph:return-value:0008:0001"><a href="kvimagenoerror.md">@@TOKEN_0@@</a>; otherwise, one of the error codes in <a href="data-types-and-constants.md">@@TOKEN_1@@</a>.</span>

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0009:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0001">You can approximate many different correction functions by carefully choosing the polynomials and the ranges of input values they operate on.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0002">For example, the sample code project <a href="applying-tone-curve-adjustments-to-images.md">@@TOKEN_0@@</a> demonstrates how to apply tone curve adjustments to images using polynomial transforms.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0011:0001">The <a href="vimagepiecewiserational_planarf(_:_:_:_:_:_:_:_:_:">@@TOKEN_0@@</a>.md) function evaluates polynomials similarly to <a href="vimagepiecewisepolynomial_planarf(_:_:_:_:_:_:_:">@@TOKEN_1@@</a>.md), but works with two sets of polynomials the <code>topCoefficients</code> and <code>bottomCoefficients</code> parameters specify.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0011:0002">The function writes the result of evaluating the top polynomials divided by the result of evaluating the bottom polynomials to the destination pixel.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0012:0001">The following code defines two sets of polynomial coefficients, <code>topCoefficients</code> as <code>[0.0, 0.5, 0.0]</code> and <code>bottomCoefficients</code> as <code>[0.0, 0.0, 1.0, 0.2]</code>.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0012:0002">The result of the expression for each pixel is (<code>0.0 * x⁰ + 0.5 * x¹ + 0.0 * x²) / (0.0 * x⁰ + 0.0 * x¹ + 1.0 * x² + 0.2 * x³)</code>.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0013:0001">Note that this function allows the top and bottom polynomials to be of different orders.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0013:0002">This example defines the boundaries array as <code>[-.infinity, .infinity]</code> so that a single rational expression covers pixels of any value.</span>

```swift
let source = vImage.PixelBuffer<vImage.PlanarF>(
    pixelValues: [0.2, 0.4, 0.6, 0.8, 1],
    size: vImage.Size(width: 5, height: 1))

let destination = vImage.PixelBuffer<vImage.PlanarF>(
    size: source.size)

// 0.0 * x⁰ + 0.5 * x¹ + 0.0 * x²
let topCoefficients: [Float] = [0.0, 0.5, 0.0]
let topOrder = UInt32(topCoefficients.count - 1)

// 0.0 * x⁰ + 0.0 * x¹ + 1.0 * x² + 0.2 * x³
let bottomCoefficients: [Float] = [0.0, 0.0, 1.0, 0.2]
let bottomOrder = UInt32(bottomCoefficients.count - 1)

let boundaries: [Float] = [-.infinity, .infinity]

let log2segments = UInt32(0)

topCoefficients.withUnsafeBufferPointer { topCoefficientsPtr in
    bottomCoefficients.withUnsafeBufferPointer { bottomCoefficientsPtr in
        source.withUnsafePointerToVImageBuffer { src in
            destination.withUnsafePointerToVImageBuffer { dest in
                
                var topCoeffs = [ topCoefficientsPtr.baseAddress ]
                var bottomCoeffs = [ bottomCoefficientsPtr.baseAddress ]
                
                vImagePiecewiseRational_PlanarF(
                    src,
                    dest,
                    &topCoeffs,
                    &bottomCoeffs,
                    boundaries,
                    topOrder,
                    bottomOrder,
                    log2segments,
                    vImage_Flags(kvImageNoFlags))
            }
        }
    }
}
```

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0015:0001">32비트 부호 있는 정수</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0015:0002">This is equivalent to the following scalar code:</span>

```swift
let result = source.array.map { x in
    
    let numerator = topCoefficients[0] * pow(x, 0) +
                    topCoefficients[1] * pow(x, 1) +
                    topCoefficients[2] * pow(x, 2)
    
    let denominator = bottomCoefficients[0] * pow(x, 0) +
                      bottomCoefficients[1] * pow(x, 1) +
                      bottomCoefficients[2] * pow(x, 2) +
                      bottomCoefficients[3] * pow(x, 3)
    
    return numerator / denominator
}
```

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0017:0001">부호 없는 정수 유형에 대한 공통 비트로는 이 상수가 유효한 유형이 아닙니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0017:0002">It incurs up to two units in the last place of error.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0017:0003">This function returns undefined results for edge cases that include denormals, infinities, NaNs, and division by zero.</span>

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0018:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0019:0001"><code>src</code>: The source vImage buffer.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0019:0002"><code>dest</code>: A pointer to the destination vImage buffer structure. You’re responsible for filling out the <code>height</code>, <code>width</code>, and <code>rowBytes</code> fields of this structure, and for allocating a data buffer of the appropriate size. On return, the data buffer this structure points to contains the destination image data. When you no longer need the data buffer, deallocate the memory to prevent memory leaks.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0019:0003"><code>topCoefficients</code>: A pointer to an array of numerator polynomial coefficient arrays. Each polynomial coefficient array contains the coefficients for one polynomial. A polynomial of order <code>R</code> has <code>R+1</code> coefficients, and all of the polynomials in this array must have the same order. Order the coefficients from the zeroth-order term to the highest order term. For example, the function evaluates the coefficients <code>[0.5, 0.6, 0.7]</code> as <code>0.5 * x⁰ + 0.6 * x¹ + 0.7 * x²</code>.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0019:0004"><code>bottomCoefficients</code>: A pointer to an array of denominator polynomial coefficient arrays. Each polynomial coefficient array contains the coefficients for one polynomial. A polynomial of order <code>R</code> has <code>R+1</code> coefficients, and all of the polynomials in this array must have the same order. Order the coefficients from the zeroth-order term to the highest order term. For example, the function evaluates the coefficients <code>[0.5, 0.6, 0.7]</code> as <code>0.5 * x⁰ + 0.6 * x¹ + 0.7 * x²</code>.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0019:0005"><code>boundaries</code>: A pointer to an array of boundary values, in increasing order, that separates adjacent ranges of pixel values. The first boundary value is the lowest in the range and the function clips input values lower than this to this value. The last boundary value is the highest in the range and the function clips input values higher than this to this value. The boundary values between the first and last separate the subranges from each other.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0019:0006"><code>topOrder</code>: The order of the numerator polynomials.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0019:0007"><code>bottomOrder</code>: The order of the denominator polynomials.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0019:0008"><code>log2segments</code>: The number of rational expressions to represent as a base-2 logarithm. If you pass a noninteger power-of-two number of polynomials, round up to the next integer power of two, and repeat the last expression the appropriate number of times.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0019:0009"><code>flags</code>: The options to use when performing the operation. If your code implements its own tiling or its own multithreading, pass <a href="kvimagedonottile.md">@@TOKEN_1@@</a>; otherwise, pass <a href="kvimagenoflags.md">@@TOKEN_2@@</a>.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:parameters:0021:0001">*<a href="https://developer.apple.com/documentation/accelerate/vimagepiecewiserational_planarf(_:_:_:_:_:_:_:_:_:">View on Apple Developer</a>)*</span>
