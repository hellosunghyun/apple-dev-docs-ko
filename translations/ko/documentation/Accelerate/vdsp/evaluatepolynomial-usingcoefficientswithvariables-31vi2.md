---
source_path: "documentation/Accelerate/vdsp/evaluatepolynomial-usingcoefficientswithvariables-31vi2.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/vdsp/evaluatepolynomial-usingcoefficientswithvariables-31vi2"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:evaluatepolynomialusingcoefficientswithvariables:0000:0001">evaluatePolynomial(usingCoefficients:withVariables:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:evaluatepolynomialusingcoefficientswithvariables:0001:0001">**Framework**: Accelerate **Kind**: method</span>

<span class="ko-segment" data-segment-id="seg:paragraph:evaluatepolynomialusingcoefficientswithvariables:0002:0001">Returns a double-precision evaluated polynomial using specified coefficients and variables.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:evaluatepolynomialusingcoefficientswithvariables:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:evaluatepolynomialusingcoefficientswithvariables:0004:0001">iOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:evaluatepolynomialusingcoefficientswithvariables:0004:0002">iPadOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:evaluatepolynomialusingcoefficientswithvariables:0004:0003">Mac Catalyst ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:evaluatepolynomialusingcoefficientswithvariables:0004:0004">macOS 10.15+</span>
- <span class="ko-segment" data-segment-id="seg:list:evaluatepolynomialusingcoefficientswithvariables:0004:0005">tvOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:evaluatepolynomialusingcoefficientswithvariables:0004:0006">visionOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:evaluatepolynomialusingcoefficientswithvariables:0004:0007">watchOS 6.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
static func evaluatePolynomial<U>(usingCoefficients coefficients: [Double], withVariables variables: U) -> [Double] where U : AccelerateBuffer, U.Element == Double
```

## <span class="ko-segment" data-segment-id="seg:heading:mentions:0007:0001">Mentions</span>

- <span class="ko-segment" data-segment-id="seg:list:mentions:0008:0001"><a href="setting-color-properties-for-a-specific-resolution.md">Setting color properties for a specific resolution</a></span>

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0009:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0001">For example, the following code evaluates the polynomial with the coefficients <code>[10.0, 20.0, 30.0]</code> and the variables <code>[7.0, 5.0]</code>:</span>

```swift
    let coefficients: [Double] = [10, 20, 30]
    let variables: [Double] = [7, 5]
    
    let result = vDSP.evaluatePolynomial(usingCoefficients: coefficients,
                                         withVariables: variables)
    
    // Prints "[660.0, 380.0]".
    //    result[0] = (10 * 7²) + (20 * 7¹) + (30 * 7⁰) = 660
    //    result[1] = (10 * 5²) + (20 * 5¹) + (30 * 5⁰) = 380
    print(result)
```

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0012:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0013:0001"><code>coefficients</code>: An array that contains the coefficients.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0013:0002"><code>variables</code>: An array that contains the independent variables.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0014:0001">See Also</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0015:0001"><a href="vdsp_vpoly.md">vDSP_vpoly</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0016:0001">Evaluates a single-precision polynomial using specified coefficients, variables, and strides.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0017:0001">[static func evaluatePolynomial&lt;U, V&gt;(usingCoefficients: [Double], withVariables: U, result: inout V)](vdsp/evaluatepolynomial(usingcoefficients:withvariables:result:)-2ncdh.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0018:0001">Evaluates a double-precision polynomial using specified coefficients and variables.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0020:0001">*<a href="https://developer.apple.com/documentation/accelerate/vdsp/evaluatepolynomial(usingcoefficients:withvariables:">View on Apple Developer</a>-31vi2)*</span>
