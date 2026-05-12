---
source_path: "documentation/Accelerate/bnnsactivation/iscale-per-channel.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/bnnsactivation/iscale-per-channel"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:iscaleperchannel:0000:0001">iscale_per_channel</span>

<span class="ko-segment" data-segment-id="seg:paragraph:iscaleperchannel:0001:0001">**Framework**: Accelerate **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:iscaleperchannel:0002:0001">정수 함수의 채널별 스케일입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:iscaleperchannel:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:iscaleperchannel:0004:0001">iOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:iscaleperchannel:0004:0002">iPadOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:iscaleperchannel:0004:0003">Mac Catalyst ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:iscaleperchannel:0004:0004">macOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:iscaleperchannel:0004:0005">tvOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:iscaleperchannel:0004:0006">visionOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:iscaleperchannel:0004:0007">watchOS ?+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var iscale_per_channel: UnsafePointer<Int32>?
```

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0007:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0008:0001"><a href="bnnsactivation/function.md">var function: BNNSActivationFunction</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0009:0001">레이어가 출력에 적용하는 활성화 함수입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="bnnsactivation/alpha.md">var alpha: Float</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">활성화 함수의 alpha 매개변수입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="bnnsactivation/beta.md">var beta: Float</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">활성화 함수의 beta 매개변수입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="bnnsactivation/iscale.md">var iscale: Int32</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">정수 함수의 스케일입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="bnnsactivation/ioffset.md">var ioffset: Int32</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">정수 함수의 오프셋입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="bnnsactivation/ishift.md">var ishift: Int32</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">정수 함수의 시프트입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001"><a href="bnnsactivation/ioffset_per_channel.md">var ioffset_per_channel: UnsafePointer&lt;Int32&gt;?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">정수 함수의 채널별 오프셋입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0022:0001"><a href="bnnsactivation/ishift_per_channel.md">var ishift_per_channel: UnsafePointer&lt;Int32&gt;?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">정수 함수의 채널별 시프트입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0025:0001">*<a href="https://developer.apple.com/documentation/accelerate/bnnsactivation/iscale_per_channel">View on Apple Developer</a>*</span>
