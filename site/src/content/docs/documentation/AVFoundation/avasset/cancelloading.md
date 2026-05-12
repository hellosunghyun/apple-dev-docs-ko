---
source_path: "documentation/AVFoundation/avasset/cancelloading.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avasset/cancelloading"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:cancelloading:0000:0001">cancelLoading()</span>

<span class="ko-segment" data-segment-id="seg:paragraph:cancelloading:0001:0001">**Framework**: AVFoundation **Kind**: method</span>

<span class="ko-segment" data-segment-id="seg:paragraph:cancelloading:0002:0001">속성 값을 비동기적으로 로드하는 보류 요청을 모두 취소합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:cancelloading:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:cancelloading:0004:0001">iOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:cancelloading:0004:0002">iPadOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:cancelloading:0004:0003">Mac Catalyst ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:cancelloading:0004:0004">macOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:cancelloading:0004:0005">tvOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:cancelloading:0004:0006">visionOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:cancelloading:0004:0007">watchOS ?+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
func cancelLoading()
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">이 메서드를 호출하면 에셋의 속성 값 로드 요청이 대기 상태에서 취소됩니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0002">에셋 사용을 마치고 대기 중인 요청을 취소하려는 경우에만 이 메서드를 호출해야 합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0003">에셋을 해제하면 로드 요청이 아직 보류 중인 경우 이 메서드가 암시적으로 호출됩니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avasset/cancelloading(">View on Apple Developer</a>)*</span>
