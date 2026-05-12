---
source_path: "documentation/AVFAudio/avaudiosession/outputvolume.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfaudio/avaudiosession/outputvolume"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:outputvolume:0000:0001">outputVolume</span>

<span class="ko-segment" data-segment-id="seg:paragraph:outputvolume:0001:0001">**Framework**: AVFAudio **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:outputvolume:0002:0001">사용자가 설정한 시스템 전체 출력 볼륨입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:outputvolume:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:outputvolume:0004:0001">iOS 6.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:outputvolume:0004:0002">iPadOS 6.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:outputvolume:0004:0003">Mac Catalyst 13.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:outputvolume:0004:0004">tvOS 9.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:outputvolume:0004:0005">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:outputvolume:0004:0006">watchOS 2.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var outputVolume: Float { get }
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">이 속성은 <code>0.0</code>에서 <code>1.0</code> 범위의 값을 반환하며, <code>0.0</code>은 최소 볼륨, <code>1.0</code>은 최대 볼륨을 나타냅니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0001">시스템 볼륨은 사용자만 직접 설정할 수 있습니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0002">앱에서 <a href="https://developer.apple.com/documentation/MediaPlayer/MPVolumeView">@@TOKEN_0@@</a>를 사용해 시스템 볼륨을 조정할 수 있는 인터페이스를 제공하려면 볼륨 제어를 추가해야 합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0001"><a href="https://developer.apple.comhttps://developer.apple.com/library/archive/documentation/General/Conceptual/DevPedia-CocoaCore/KVO.html#//apple_ref/doc/uid/TP40008195-CH16">@@TOKEN_0@@</a>을 사용해 이 속성 값의 변경을 관찰할 수 있습니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0012:0001">*<a href="https://developer.apple.com/documentation/avfaudio/avaudiosession/outputvolume">View on Apple Developer</a>*</span>
