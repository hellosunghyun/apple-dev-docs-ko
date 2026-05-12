---
source_path: "documentation/Accelerate/bnnsarithmeticmultiply.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/bnnsarithmeticmultiply"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:bnnsarithmeticmultiply:0000:0001">BNNSArithmeticMultiply</span>

<span class="ko-segment" data-segment-id="seg:paragraph:bnnsarithmeticmultiply:0001:0001">**Framework**: Accelerate **Kind**: var</span>

<span class="ko-segment" data-segment-id="seg:paragraph:bnnsarithmeticmultiply:0002:0001">두 입력의 요소별 곱을 계산하는 연산입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:bnnsarithmeticmultiply:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:bnnsarithmeticmultiply:0004:0001">iOS 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsarithmeticmultiply:0004:0002">iPadOS 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsarithmeticmultiply:0004:0003">Mac Catalyst 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsarithmeticmultiply:0004:0004">macOS 11.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsarithmeticmultiply:0004:0005">tvOS 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsarithmeticmultiply:0004:0006">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsarithmeticmultiply:0004:0007">watchOS 7.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var BNNSArithmeticMultiply: BNNSArithmeticFunction { get }
```

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0007:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0008:0001"><a href="bnnsarithmeticadd.md">var BNNSArithmeticAdd: BNNSArithmeticFunction</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0009:0001">두 입력의 요소별 합을 계산하는 연산입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="bnnsarithmeticsubtract.md">var BNNSArithmeticSubtract: BNNSArithmeticFunction</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">두 입력의 요소별 차이를 계산하는 연산입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="bnnsarithmeticdivide.md">var BNNSArithmeticDivide: BNNSArithmeticFunction</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">두 입력의 요소별 나눗셈을 계산하는 연산입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="bnnsarithmeticdividenonan.md">var BNNSArithmeticDivideNoNaN: BNNSArithmeticFunction</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">두 입력의 요소별 나눗셈을 계산하며, 첫 번째 입력이 NaN이나 무한대인 경우에도 나누는 값이 0이면 0을 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="bnnsarithmeticmultiplynonan.md">var BNNSArithmeticMultiplyNoNaN: BNNSArithmeticFunction</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">두 입력의 요소별 곱을 계산하고, 첫 번째 입력이 NaN이나 무한대인 경우에도 0을 반환하는 연산입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="bnnsarithmeticpow.md">var BNNSArithmeticPow: BNNSArithmeticFunction</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">두 입력의 첫 번째 입력을 두 번째 입력의 거듭제곱으로 계산하는 요소별 연산입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001"><a href="bnnsarithmeticmaximum.md">var BNNSArithmeticMaximum: BNNSArithmeticFunction</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">두 입력의 요소별 최대값을 계산하는 연산입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0022:0001"><a href="bnnsarithmeticminimum.md">var BNNSArithmeticMinimum: BNNSArithmeticFunction</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">두 입력의 요소별 최소값을 계산하는 연산입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0024:0001"><a href="bnnsarithmeticfloordivide.md">var BNNSArithmeticFloorDivide: BNNSArithmeticFunction</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0025:0001">입력의 요소별 floor division을 계산하는 연산입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0026:0001"><a href="bnnsarithmetictruncdivide.md">var BNNSArithmeticTruncDivide: BNNSArithmeticFunction</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0027:0001">입력의 요소별 truncated division을 계산하는 연산입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0028:0001"><a href="bnnsarithmetictruncremainder.md">var BNNSArithmeticTruncRemainder: BNNSArithmeticFunction</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0029:0001">An operation that calculates the element-wise remainder of truncated division of its inputs.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0031:0001">*<a href="https://developer.apple.com/documentation/accelerate/bnnsarithmeticmultiply">View on Apple Developer</a>*</span>
