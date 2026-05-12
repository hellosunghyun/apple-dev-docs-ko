---
source_path: "documentation/AVFAudio/avaudionodetapblock.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfaudio/avaudionodetapblock"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:avaudionodetapblock:0000:0001">AVAudioNodeTapBlock</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avaudionodetapblock:0001:0001">**Framework**: AVFAudio **Kind**: typealias</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avaudionodetapblock:0002:0001">오디오 노드의 출력 복사본을 받는 블록입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avaudionodetapblock:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:avaudionodetapblock:0004:0001">iOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:avaudionodetapblock:0004:0002">iPadOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:avaudionodetapblock:0004:0003">Mac Catalyst ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:avaudionodetapblock:0004:0004">macOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:avaudionodetapblock:0004:0005">tvOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:avaudionodetapblock:0004:0006">visionOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:avaudionodetapblock:0004:0007">watchOS ?+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
typealias AVAudioNodeTapBlock = (AVAudioPCMBuffer, AVAudioTime) -> Void
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

> <span class="ko-segment" data-segment-id="seg:blockquote:discussion:0008:0001">❗ **중요**: 프레임워크는 이 콜백을 메인 스레드가 아닌 다른 스레드에서 호출할 수 있습니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0009:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0010:0001"><code>buffer</code>: 시스템이 오디오 노드의 출력에서 캡처한 오디오 버퍼입니다`<code>.</code></span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0010:0002"><code>when</code>: 시스템이 버퍼를 캡처한 시점입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0011:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="avaudionode/installtap(onbus:buffersize:format:block:">func installTap(onBus: AVAudioNodeBus, bufferSize: AVAudioFrameCount, format: AVAudioFormat?, block: AVAudioNodeTapBlock)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">지정한 버스에 오디오 탭을 설치해 노드 출력을 녹음, 모니터링, 관찰합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="avaudionode/removetap(onbus:">func removeTap(onBus: AVAudioNodeBus)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">지정한 버스에서 오디오 탭을 제거합니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">*<a href="https://developer.apple.com/documentation/avfaudio/avaudionodetapblock">View on Apple Developer</a>*</span>
