---
source_path: "documentation/AVFoundation/avvideoscalingmoderesize.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avvideoscalingmoderesize"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:avvideoscalingmoderesize:0000:0001">AVVideoScalingModeResize</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avvideoscalingmoderesize:0001:0001">**Framework**: AVFoundation **Kind**: var</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avvideoscalingmoderesize:0002:0001">주변 뷰의 치수에 맞게 비디오 크기를 조정하는 문자열 식별자입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avvideoscalingmoderesize:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:avvideoscalingmoderesize:0004:0001">iOS 5.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avvideoscalingmoderesize:0004:0002">iPadOS 5.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avvideoscalingmoderesize:0004:0003">Mac Catalyst 13.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:avvideoscalingmoderesize:0004:0004">macOS 10.7+</span>
- <span class="ko-segment" data-segment-id="seg:list:avvideoscalingmoderesize:0004:0005">tvOS 9.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avvideoscalingmoderesize:0004:0006">visionOS 1.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
let AVVideoScalingModeResize: String
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">이 모드는 가장자리 처리 영역을 제거하기 위해 비디오를 크롭한 다음, 나머지를 대상 영역에 맞게 크기 조정합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0002">종횡비를 유지하지 않습니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0009:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="avvideoscalingmodefit.md">let AVVideoScalingModeFit: String</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">주변 뷰의 치수에 맞게 비디오를 스케일링하는 문자열 식별자입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="avvideoscalingmodekey.md">let AVVideoScalingModeKey: String</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">사전에서 비디오 스케일링 모드를 검색하는 키입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="avvideoscalingmoderesizeaspect.md">let AVVideoScalingModeResizeAspect: String</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">주변 뷰의 짧은 변에 맞추어 종횡비를 유지하면서 비디오 크기를 조정하는 문자열 식별자입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="avvideoscalingmoderesizeaspectfill.md">let AVVideoScalingModeResizeAspectFill: String</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">주변 뷰의 긴 변에 맞추어 종횡비를 유지하면서 비디오 크기를 조정하는 문자열 식별자입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avvideoscalingmoderesize">View on Apple Developer</a>*</span>
