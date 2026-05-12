---
source_path: "documentation/AVFAudio/avaudiounitcomponentmanager/components-matching-96l2c.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfaudio/avaudiounitcomponentmanager/components-matching-96l2c"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:componentsmatching:0000:0001">components(matching:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:componentsmatching:0001:0001">**Framework**: AVFAudio **Kind**: method</span>

<span class="ko-segment" data-segment-id="seg:paragraph:componentsmatching:0002:0001">검색 predicate와 일치하는 오디오 구성요소 객체 배열을 가져옵니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:componentsmatching:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:componentsmatching:0004:0001">iOS 9.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:componentsmatching:0004:0002">iPadOS 9.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:componentsmatching:0004:0003">Mac Catalyst 13.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:componentsmatching:0004:0004">macOS 10.10+</span>
- <span class="ko-segment" data-segment-id="seg:list:componentsmatching:0004:0005">tvOS 9.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:componentsmatching:0004:0006">visionOS 1.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
func components(matching predicate: NSPredicate) -> [AVAudioUnitComponent]
```

#### <span class="ko-segment" data-segment-id="seg:heading:return-value:0007:0001">반환 값</span>

<span class="ko-segment" data-segment-id="seg:paragraph:return-value:0008:0001">predicate와 일치하는 <code>AVAudioComponent</code> 객체의 배열입니다.</span>

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0009:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0001">오디오 구성요소의 정보 또는 태그를 사용해 검색 조건을 구성할 수 있습니다. 예를 들어 <code>typeName CONTAINS 'Effect'</code> 또는 <code>tags IN {'Sampler', 'MIDI'}</code>와 같습니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0011:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0012:0001"><code>predicate</code>: 검색 predicate입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0013:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001">[func components(matching: AudioComponentDescription) -&gt; [AVAudioUnitComponent]](avaudiounitcomponentmanager/components(matching:)-9qt94.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">설명과 일치하는 오디오 구성요소 객체 배열을 가져옵니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001">[func components(passingTest: (AVAudioUnitComponent, UnsafeMutablePointer&lt;ObjCBool&gt;) -&gt; Bool) -&gt; [AVAudioUnitComponent]](avaudiounitcomponentmanager/components(passingtest:).md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">블록 메서드를 통과한 오디오 구성요소의 배열을 가져옵니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">*<a href="https://developer.apple.com/documentation/avfaudio/avaudiounitcomponentmanager/components(matching:">Apple Developer에서 보기</a>-96l2c)*</span>
