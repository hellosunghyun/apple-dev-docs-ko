---
source_path: "documentation/Accelerate/bnnsdatalayout7dfirstmajor.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/bnnsdatalayout7dfirstmajor"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:bnnsdatalayout7dfirstmajor:0000:0001">BNNSDataLayout7DFirstMajor</span>

<span class="ko-segment" data-segment-id="seg:paragraph:bnnsdatalayout7dfirstmajor:0001:0001">**Framework**: Accelerate **Kind**: var</span>

<span class="ko-segment" data-segment-id="seg:paragraph:bnnsdatalayout7dfirstmajor:0002:0001">7D first-major 텐서를 나타내는 상수입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:bnnsdatalayout7dfirstmajor:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:bnnsdatalayout7dfirstmajor:0004:0001">iOS 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsdatalayout7dfirstmajor:0004:0002">iPadOS 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsdatalayout7dfirstmajor:0004:0003">Mac Catalyst 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsdatalayout7dfirstmajor:0004:0004">macOS 11.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsdatalayout7dfirstmajor:0004:0005">tvOS 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsdatalayout7dfirstmajor:0004:0006">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsdatalayout7dfirstmajor:0004:0007">watchOS 7.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var BNNSDataLayout7DFirstMajor: BNNSDataLayout { get }
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">값 <code>(i, j, k, l, m, n, o)</code>의 인덱스는 다음과 같습니다:</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0001"><code>o * stride[0] + n * stride[1] + m * stride[2] + l * stride[3] +</code></span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0001"><code>k * stride[4] + j * stride[5] + i * stride[6]</code>.</span>

- <span class="ko-segment" data-segment-id="seg:list:discussion:0011:0001"><code>size[0]</code>은 첫 번째 차원(<code>i</code>)의 크기입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:discussion:0011:0002"><code>size[1]</code>은 두 번째 차원(<code>j</code>)의 크기입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:discussion:0011:0003"><code>size[2]</code>은 세 번째 차원(<code>k</code>)의 크기입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:discussion:0011:0004"><code>size[3]</code>은 네 번째 차원(<code>l</code>)의 크기입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:discussion:0011:0005"><code>size[4]</code>은 다섯 번째 차원(<code>m</code>)의 크기입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:discussion:0011:0006"><code>size[5]</code>은 여섯 번째 차원(<code>n</code>)의 크기입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:discussion:0011:0007"><code>size[6]</code>은 일곱 번째 차원(<code>o</code>)의 크기입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0012:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0013:0001"><a href="bnnsdatalayout7dlastmajor.md">var BNNSDataLayout7DLastMajor: BNNSDataLayout</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0014:0001">7D last-major 텐서를 나타내는 상수입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0016:0001">*<a href="https://developer.apple.com/documentation/accelerate/bnnsdatalayout7dfirstmajor">View on Apple Developer</a>*</span>
