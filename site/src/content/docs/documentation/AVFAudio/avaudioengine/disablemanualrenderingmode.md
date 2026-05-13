---
source_path: "documentation/AVFAudio/avaudioengine/disablemanualrenderingmode.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfaudio/avaudioengine/disablemanualrenderingmode"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:disablemanualrenderingmode:0000:0001">disableManualRenderingMode()</span>

<span class="ko-segment" data-segment-id="seg:paragraph:disablemanualrenderingmode:0001:0001">**Framework**: AVFAudio **Kind**: method</span>

<span class="ko-segment" data-segment-id="seg:paragraph:disablemanualrenderingmode:0002:0001">엔진을 오디오 장치로부터 렌더링하거나 오디오 장치로 렌더링하도록 설정합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:disablemanualrenderingmode:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:disablemanualrenderingmode:0004:0001">iOS 11.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:disablemanualrenderingmode:0004:0002">iPadOS 11.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:disablemanualrenderingmode:0004:0003">Mac Catalyst 13.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:disablemanualrenderingmode:0004:0004">macOS 10.13+</span>
- <span class="ko-segment" data-segment-id="seg:list:disablemanualrenderingmode:0004:0005">tvOS 11.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:disablemanualrenderingmode:0004:0006">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:disablemanualrenderingmode:0004:0007">watchOS 4.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
func disableManualRenderingMode()
```

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0007:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0008:0001"><a href="avaudioengine/enablemanualrenderingmode(_:format:maximumframecount:">func enableManualRenderingMode(AVAudioEngineManualRenderingMode, format: AVAudioFormat, maximumFrameCount: AVAudioFrameCount) throws</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0009:0001">지정한 렌더 형식과 최대 프레임 수로 엔진을 수동 렌더링 모드에서 동작하도록 설정합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="avaudioengine/renderoffline(_:to:">func renderOffline(AVAudioFrameCount, to: AVAudioPCMBuffer) throws -&gt; AVAudioEngineManualRenderingStatus</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">오프라인 수동 렌더링 모드에서 동작하는 엔진에 대한 렌더링 호출을 수행합니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">*<a href="https://developer.apple.com/documentation/avfaudio/avaudioengine/disablemanualrenderingmode(">Apple Developer에서 보기</a>)*</span>
