---
source_path: "documentation/AVFAudio/avaudiounitcomponentmanager.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfaudio/avaudiounitcomponentmanager"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:avaudiounitcomponentmanager:0000:0001">AVAudioUnitComponentManager</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avaudiounitcomponentmanager:0001:0001">**Framework**: AVFAudio **Kind**: class</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avaudiounitcomponentmanager:0002:0001">시스템이 등록한 오디오 컴포넌트를 검색하고 질의할 수 있는 방법을 제공하는 개체입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avaudiounitcomponentmanager:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:avaudiounitcomponentmanager:0004:0001">iOS 9.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avaudiounitcomponentmanager:0004:0002">iPadOS 9.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avaudiounitcomponentmanager:0004:0003">Mac Catalyst 13.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:avaudiounitcomponentmanager:0004:0004">macOS 10.10+</span>
- <span class="ko-segment" data-segment-id="seg:list:avaudiounitcomponentmanager:0004:0005">tvOS 9.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avaudiounitcomponentmanager:0004:0006">visionOS 1.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
class AVAudioUnitComponentManager
```

#### <span class="ko-segment" data-segment-id="seg:heading:overview:0007:0001">Overview</span>

<span class="ko-segment" data-segment-id="seg:paragraph:overview:0008:0001">컴포넌트 매니저는 오디오 컴포넌트를 열지 않고도 다양한 정보를 찾을 수 있는 메서드를 제공합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:overview:0008:0002">현재는 오디오 유닛인 오디오 컴포넌트만 검색할 수 있습니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:overview:0009:0001">이 클래스는 시스템 태그와 임의 사용자 태그를 지원합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:overview:0009:0002">각 오디오 유닛을 정의의 일부로 태그할 수 있습니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:overview:0009:0003">Logic 또는 GarageBand와 같은 오디오 유닛 호스트는 태그에 따라 오디오 유닛 그룹을 표시할 수 있습니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:overview:0010:0001">오디오 유닛은 다음과 같은 방식으로 검색할 수 있습니다:</span>

- <span class="ko-segment" data-segment-id="seg:list:overview:0011:0001">태그 또는 설명 문자열을 포함하는 <code>NSPredicate</code> 인스턴스를 사용합니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:overview:0011:0002">사용자 지정 기준을 충족하는 블록을 사용합니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:overview:0011:0003"><code>AudioComponentDescription</code>를 사용합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:topics:0012:0001">Topics</span>

### <span class="ko-segment" data-segment-id="seg:heading:getting-the-unit-audio-component-manager:0013:0001">오디오 컴포넌트 매니저 가져오기</span>

- <span class="ko-segment" data-segment-id="seg:list:getting-the-unit-audio-component-manager:0014:0001"><a href="avaudiounitcomponentmanager/shared.md">class func shared() -&gt; Self</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:getting-the-unit-audio-component-manager:0015:0001">공유 컴포넌트 매니저 인스턴스를 가져옵니다.</span>

### <span class="ko-segment" data-segment-id="seg:heading:getting-matching-audio-components:0016:0001">일치하는 오디오 컴포넌트 가져오기</span>

- <span class="ko-segment" data-segment-id="seg:list:getting-matching-audio-components:0017:0001">[func components(matching: AudioComponentDescription) -&gt; [AVAudioUnitComponent]](avaudiounitcomponentmanager/components(matching:)-9qt94.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:getting-matching-audio-components:0018:0001">설명과 일치하는 오디오 컴포넌트 객체 배열을 가져옵니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:getting-matching-audio-components:0019:0001">[func components(matching: NSPredicate) -&gt; [AVAudioUnitComponent]](avaudiounitcomponentmanager/components(matching:)-96l2c.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:getting-matching-audio-components:0020:0001">검색 predicate와 일치하는 오디오 컴포넌트 객체의 배열을 가져옵니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:getting-matching-audio-components:0021:0001">[func components(passingTest: (AVAudioUnitComponent, UnsafeMutablePointer&lt;ObjCBool&gt;) -&gt; Bool) -&gt; [AVAudioUnitComponent]](avaudiounitcomponentmanager/components(passingtest:).md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:getting-matching-audio-components:0022:0001">블록 메서드를 통과하는 오디오 컴포넌트의 배열을 가져옵니다.</span>

### <span class="ko-segment" data-segment-id="seg:heading:getting-audio-unit-tags:0023:0001">오디오 유닛 태그 가져오기</span>

- <span class="ko-segment" data-segment-id="seg:list:getting-audio-unit-tags:0024:0001">[var standardLocalizedTagNames: [String]](avaudiounitcomponentmanager/standardlocalizedtagnames.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:getting-audio-unit-tags:0025:0001">오디오 유닛이 정의하는 로컬라이즈된 표준 시스템 태그 배열입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:getting-audio-unit-tags:0026:0001">[var tagNames: [String]](avaudiounitcomponentmanager/tagnames.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:getting-audio-unit-tags:0027:0001">오디오 유닛이 현재 사용자와 연결한 모든 태그와 오디오 유닛이 정의한 시스템 태그의 배열입니다.</span>

### <span class="ko-segment" data-segment-id="seg:heading:observing-registration-changes:0028:0001">등록 변경 사항 관찰</span>

- <span class="ko-segment" data-segment-id="seg:list:observing-registration-changes:0029:0001"><a href="avaudiounitcomponentmanager/registrationschangednotification.md">class let registrationsChangedNotification: NSNotification.Name</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:observing-registration-changes:0030:0001">컴포넌트 매니저가 컴포넌트 목록을 갱신할 때 생성하는 알림입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:relationships:0031:0001">Relationships</span>

### <span class="ko-segment" data-segment-id="seg:heading:inherits-from:0032:0001">상속</span>

- <span class="ko-segment" data-segment-id="seg:list:inherits-from:0033:0001"><a href="../ObjectiveC/NSObject-swift.class.md">NSObject</a></span>

### <span class="ko-segment" data-segment-id="seg:heading:conforms-to:0034:0001">준수</span>

- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0035:0001"><a href="../Swift/CVarArg.md">CVarArg</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0035:0002"><a href="../Swift/CustomDebugStringConvertible.md">CustomDebugStringConvertible</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0035:0003"><a href="../Swift/CustomStringConvertible.md">CustomStringConvertible</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0035:0004"><a href="../Swift/Equatable.md">Equatable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0035:0005"><a href="../Swift/Hashable.md">Hashable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0035:0006"><a href="../ObjectiveC/NSObjectProtocol.md">NSObjectProtocol</a></span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0036:0001">참고</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0037:0001"><a href="avaudiounitcomponent.md">class AVAudioUnitComponent</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0038:0001">오디오 유닛에 대한 세부 정보를 제공하는 개체입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0040:0001">*<a href="https://developer.apple.com/documentation/avfaudio/avaudiounitcomponentmanager">View on Apple Developer</a>*</span>
