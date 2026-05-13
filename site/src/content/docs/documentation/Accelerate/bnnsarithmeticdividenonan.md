---
source_path: "documentation/Accelerate/bnnsarithmeticdividenonan.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/bnnsarithmeticdividenonan"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:bnnsarithmeticdividenonan:0000:0001">BNNSArithmeticDivideNoNaN</span>

<span class="ko-segment" data-segment-id="seg:paragraph:bnnsarithmeticdividenonan:0001:0001">**Framework**: Accelerate **Kind**: var</span>

<span class="ko-segment" data-segment-id="seg:paragraph:bnnsarithmeticdividenonan:0002:0001">두 입력의 요소별 나눗셈을 계산하며, 나누는 값이 0인 경우 첫 번째 입력이 NaN 또는 무한대여도 0을 반환하는 연산입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:bnnsarithmeticdividenonan:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:bnnsarithmeticdividenonan:0004:0001">iOS 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsarithmeticdividenonan:0004:0002">iPadOS 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsarithmeticdividenonan:0004:0003">Mac Catalyst 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsarithmeticdividenonan:0004:0004">macOS 11.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsarithmeticdividenonan:0004:0005">tvOS 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsarithmeticdividenonan:0004:0006">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsarithmeticdividenonan:0004:0007">watchOS 7.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var BNNSArithmeticDivideNoNaN: BNNSArithmeticFunction { get }
```

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0007:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0008:0001"><a href="bnnsarithmeticadd.md">var BNNSArithmeticAdd: BNNSArithmeticFunction</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0009:0001">두 입력의 요소별 합계를 계산하는 연산입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="bnnsarithmeticsubtract.md">var BNNSArithmeticSubtract: BNNSArithmeticFunction</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">두 입력의 요소별 차이를 계산하는 연산입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="bnnsarithmeticdivide.md">var BNNSArithmeticDivide: BNNSArithmeticFunction</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">두 입력의 요소별 나눗셈을 계산하는 연산입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="bnnsarithmeticmultiply.md">var BNNSArithmeticMultiply: BNNSArithmeticFunction</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">두 입력의 요소별 곱셈을 계산하는 연산입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="bnnsarithmeticmultiplynonan.md">var BNNSArithmeticMultiplyNoNaN: BNNSArithmeticFunction</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">두 입력의 요소별 곱셈을 계산하며, 첫 번째 입력이 NaN 또는 무한대인 경우에도 0을 반환하는 연산입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="bnnsarithmeticpow.md">var BNNSArithmeticPow: BNNSArithmeticFunction</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">첫 번째 입력을 두 번째 입력의 거듭제곱으로 계산하는 요소별 연산입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001"><a href="bnnsarithmeticmaximum.md">var BNNSArithmeticMaximum: BNNSArithmeticFunction</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">두 입력의 요소별 최댓값을 계산하는 연산입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0022:0001"><a href="bnnsarithmeticminimum.md">var BNNSArithmeticMinimum: BNNSArithmeticFunction</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">두 입력의 요소별 최솟값을 계산하는 연산입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0024:0001"><a href="bnnsarithmeticfloordivide.md">var BNNSArithmeticFloorDivide: BNNSArithmeticFunction</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0025:0001">입력의 요소별 floor division을 계산하는 연산입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0026:0001"><a href="bnnsarithmetictruncdivide.md">var BNNSArithmeticTruncDivide: BNNSArithmeticFunction</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0027:0001">입력의 요소별 truncation division(절단 나눗셈)을 계산하는 연산입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0028:0001"><a href="bnnsarithmetictruncremainder.md">var BNNSArithmeticTruncRemainder: BNNSArithmeticFunction</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0029:0001">입력의 요소별 truncation division(절단 나눗셈) 나머지를 계산하는 연산입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0031:0001">*<a href="https://developer.apple.com/documentation/accelerate/bnnsarithmeticdividenonan">View on Apple Developer</a>*</span>
