---
source_path: "documentation/AdAttributionKit/configuring-attribution-rules-for-your-app.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/adattributionkit/configuring-attribution-rules-for-your-app"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:configuring-attribution-rules-for-your-app:0000:0001">앱의 어트리뷰션 규칙 구성</span>

<span class="ko-segment" data-segment-id="seg:paragraph:configuring-attribution-rules-for-your-app:0001:0001">**프레임워크**: AdAttributionKit</span>

<span class="ko-segment" data-segment-id="seg:paragraph:configuring-attribution-rules-for-your-app:0002:0001">노출 등록 가능 시간과 앱에서 전환을 허용할 최소 시간을 포함해 어트리뷰션 흐름의 여러 측면을 조정할 수 있습니다.</span>

#### <span class="ko-segment" data-segment-id="seg:heading:overview:0003:0001">Overview</span>

<span class="ko-segment" data-segment-id="seg:paragraph:overview:0004:0001">AdAttributionKit은(는) 정보 속성 목록에 키를 추가하고 구성하여 앱에서 변경한 어트리뷰션 규칙을 설정할 수 있는 메커니즘을 제공합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:overview:0005:0001">정보 속성 목록에 추가되는 AdAttributionKit 항목의 구조에는 앱에서 어트리뷰션 대상으로 간주되는 노출의 유효 기간을 제어할 수 있는 구간이 포함됩니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:overview:0005:0002">또한 시스템이 새 전환을 수락하기 전에 전환 사이에 경과해야 하는 최소 시간인 쿨다운 기간도 제어할 수 있습니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:overview:0006:0001">구성에는 두 가지 주요 섹션이 있습니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:overview:0007:0001">앱에서 노출이 유효한 기간을 제어하는 AttributionWindows 설정입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:overview:0007:0002">전환이 발생할 수 있는 빈도를 앱이 지정할 수 있게 하는 AttributionCooldown 설정입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:overview:0008:0001">각 섹션에는 각 제어의 동작을 조정하는 추가 키가 있으며, 적용 대상 광고 네트워크를 정의하거나 전역 설정인지 지정할 수 있습니다.</span>

#### <span class="ko-segment" data-segment-id="seg:heading:understand-the-adattributionkit-configuration-dictionary:0009:0001">AdAttributionKit 구성 사전 이해</span>

<span class="ko-segment" data-segment-id="seg:paragraph:understand-the-adattributionkit-configuration-dictionary:0010:0001">AdAttributionKit는 구성 설정을 저장하기 위해 앱의 information property list를 사용합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:understand-the-adattributionkit-configuration-dictionary:0010:0002">이 구성을 사용하려면 정보 속성 목록에 <code>AdAttributionKitConfigurations</code>라는 새 딕셔너리를 추가합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:understand-the-adattributionkit-configuration-dictionary:0011:0001">이 딕셔너리 안에는 앱 요구사항에 따라 어트리뷰션 창과 쿨다운 기간을 제어하는 추가 딕셔너리 또는 개별 키를 배치합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:understand-the-adattributionkit-configuration-dictionary:0011:0002"><code>AdAttributionKitConfigurations</code> 딕셔너리를 만들려면 앱의 Xcode 프로젝트를 열고 다음 단계를 따릅니다.</span>

1. <span class="ko-segment" data-segment-id="seg:list:understand-the-adattributionkit-configuration-dictionary:0012:0001">Xcode에서 앱의 프로젝트를 엽니다.</span>
2. <span class="ko-segment" data-segment-id="seg:list:understand-the-adattributionkit-configuration-dictionary:0012:0002">파일 탐색기로 이동합니다.</span>
3. <span class="ko-segment" data-segment-id="seg:list:understand-the-adattributionkit-configuration-dictionary:0012:0003">앱의 target을 찾아 파일명을 선택합니다.</span>
4. <span class="ko-segment" data-segment-id="seg:list:understand-the-adattributionkit-configuration-dictionary:0012:0004">앱의 Info 패널을 클릭합니다.</span>
5. <span class="ko-segment" data-segment-id="seg:list:understand-the-adattributionkit-configuration-dictionary:0012:0005">정보 속성 목록에서 새 요소를 만들려면 기존 항목 옆의 더하기(+) 버튼을 클릭합니다.</span>
6. <span class="ko-segment" data-segment-id="seg:list:understand-the-adattributionkit-configuration-dictionary:0012:0006">새 요소의 이름을 <code>AdAttributionKitConfigurations</code>로 설정합니다.</span>
7. <span class="ko-segment" data-segment-id="seg:list:understand-the-adattributionkit-configuration-dictionary:0012:0007">새 <code>AdAttributionKitConfigurations</code> 요소의 Type 메뉴를 클릭하고 유형을 <code>Dictionary</code>로 선택합니다.</span>
8. <span class="ko-segment" data-segment-id="seg:list:understand-the-adattributionkit-configuration-dictionary:0012:0008"><code>AdAttributionKitConfigurations</code> 요소 옆의 펼치기 삼각형을 클릭해 엽니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:understand-the-adattributionkit-configuration-dictionary:0013:0001">구성을 완료하려면 앱에서 사용할 AdAttributionKit 구성에 따라 다음의 추가 제어 요소를 하나 이상 추가합니다.</span>

> <span class="ko-segment" data-segment-id="seg:blockquote:understand-the-adattributionkit-configuration-dictionary:0014:0001">**Note**: 명확성을 위해 예제에는 AdAttributionKit 어트리뷰션 창과 쿨다운 기간을 제어하는 딕셔너리 및 키의 XML 렌더링이 표시됩니다.</span> <span class="ko-segment" data-segment-id="seg:blockquote:understand-the-adattributionkit-configuration-dictionary:0014:0002">실제로는 Xcode의 information property list 편집기를 사용해 이러한 설정을 생성하고 편집합니다.</span>

#### <span class="ko-segment" data-segment-id="seg:heading:add-an-attribution-windows-dictionary:0015:0001">Attribution Windows 딕셔너리 추가</span>

<span class="ko-segment" data-segment-id="seg:paragraph:add-an-attribution-windows-dictionary:0016:0001">구성 가능한 어트리뷰션 윈도우를 사용하여 앱에서 impression이 유효한 기간을 지정할 수 있습니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:add-an-attribution-windows-dictionary:0016:0002">기본적으로 뷰 인상은 노출 후 1일 동안, 클릭 인상은 30일 동안 유효합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:add-an-attribution-windows-dictionary:0016:0003">구성 가능한 어트리뷰션 윈도우에서는 뷰 인상은 1~7일, 클릭 인상은 1~30일 범위로 기간을 지정할 수 있습니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:add-an-attribution-windows-dictionary:0017:0001">개별 광고 네트워크 또는 글로벌 광고 네트워크 구성을 만들려면 <code>AdAttributionKitConfigurations</code>에 이를 담는 딕셔너리가 필요합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:add-an-attribution-windows-dictionary:0017:0002">이 딕셔너리를 만들려면 다음 단계를 따릅니다.</span>

1. <span class="ko-segment" data-segment-id="seg:list:add-an-attribution-windows-dictionary:0018:0001">새 <code>AdAttributionKitConfigurations</code> 내부에 <code>AttributionWindows</code>라는 새 요소를 추가합니다.</span>
2. <span class="ko-segment" data-segment-id="seg:list:add-an-attribution-windows-dictionary:0018:0002">새 <code>AttributionWindows</code> 요소의 Type 메뉴를 클릭하고 유형을 <code>Dictionary</code>로 설정합니다.</span>
3. <span class="ko-segment" data-segment-id="seg:list:add-an-attribution-windows-dictionary:0018:0003">새 <code>AttributionWindows</code> 요소 옆의 펼치기 삼각형을 클릭해 엽니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:add-an-attribution-windows-dictionary:0019:0001">앱은 어트리뷰션 윈도우를 글로벌하게 구성할 수 있으므로, 프레임워크가 모든 전환에 적용하고 광고 네트워크별로도 적용합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:add-an-attribution-windows-dictionary:0019:0002">이를 통해 세분성 수준을 제어하고 비즈니스에 가장 적합한 어트리뷰션 규칙을 정의할 수 있습니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:add-an-attribution-windows-dictionary:0019:0003">시스템은 구성의 우선순위를 광고 네트워크 &gt; 글로벌 &gt; 시스템 기본값 순으로 사용하며, 광고 네트워크 구성은 항상 글로벌 또는 시스템 기본값 구성보다 우선합니다.</span>

#### <span class="ko-segment" data-segment-id="seg:heading:configure-your-apps-global-attribution-window:0020:0001">앱의 글로벌 어트리뷰션 윈도우 구성</span>

<span class="ko-segment" data-segment-id="seg:paragraph:configure-your-apps-global-attribution-window:0021:0001">어트리뷰션 윈도우 설정은 두 가지 글로벌 설정 유형을 지원합니다. 광고 네트워크에 적용되는 *global settings*와, 지정한 광고 네트워크의 전환 관련 특정 매개변수를 제어하는 *per-ad network settings*입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:configure-your-apps-global-attribution-window:0022:0001">내장된 글로벌 어트리뷰션 윈도우 설정을 재정의하려면 다음 단계를 따릅니다.</span>

1. <span class="ko-segment" data-segment-id="seg:list:configure-your-apps-global-attribution-window:0023:0001">앱의 information property list에서 <code>AttributionWindows</code> 딕셔너리 안에 <code>global</code>이라는 새 딕셔너리를 만듭니다.</span>
2. <span class="ko-segment" data-segment-id="seg:list:configure-your-apps-global-attribution-window:0023:0002">이 딕셔너리 안에 또 하나의 중첩 딕셔너리 <code>install</code>을 추가합니다. 이는 정의하려는 작업 유형을 설명합니다.</span>
3. <span class="ko-segment" data-segment-id="seg:list:configure-your-apps-global-attribution-window:0023:0003">Inside the <code>install</code> dictionary, you can specify numeric values for either <code>click</code> or <code>view</code> values. The click value determines the number of days that click impressions are valid for your app globally, with a range from <code>1</code> to <code>30</code> days. The view value determines the number of days that view impressions are valid for your app globally, with a range from  <code>1</code> to <code>7</code> days. This example shows an XML rendering of a <code>global</code> dictionary inside the <code>AttributionWindows</code> dictionary that constrains <code>view</code> to <code>3</code> days:</span>

```xml
    <key>AdAttributionKitConfigurations</key>
    <dict>
        <key>AttributionWindows</key>
        <dict>
            <key>global</key>
            <dict>
                <key>install</key>
                <dict>
                    <key>view</key>
                    <integer>3</integer>
                </dict>
            </dict>
        </dict>
  </dict>
```

#### <span class="ko-segment" data-segment-id="seg:heading:configure-attribution-windows-per-ad-network:0025:0001">광고 네트워크별 어트리뷰션 윈도우 구성</span>

<span class="ko-segment" data-segment-id="seg:paragraph:configure-attribution-windows-per-ad-network:0026:0001">앱의 어트리뷰션 윈도우는 광고 네트워크별로도 덮어쓸 수 있어, 협력하는 각 파트너에 대해 더 세밀한 제어가 가능합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:configure-attribution-windows-per-ad-network:0026:0002">광고 네트워크의 어트리뷰션 윈도우를 구성하려면 다음 단계를 따르십시오.</span>

1. <span class="ko-segment" data-segment-id="seg:list:configure-attribution-windows-per-ad-network:0027:0001">앱의 information property list에서 <code>AdAttributionKitConfigurations</code> 딕셔너리 내부에 <code>AttributionWindows</code>라는 새 딕셔너리를 만듭니다.</span>
2. <span class="ko-segment" data-segment-id="seg:list:configure-attribution-windows-per-ad-network:0027:0002">해당 <code>AttributionWindows</code> 딕셔너리에 광고 네트워크별로 하나씩 추가 딕셔너리를 넣어 해당 네트워크의 <code>click</code>과 <code>view</code> 창을 제어합니다. 네트워크별 딕셔너리는 광고 네트워크 ID와 일치하는 키 이름을 사용해야 합니다(예: <code>test.adattributionkit</code>). 광고 네트워크 ID에 대한 자세한 내용은 <a href="registering-an-ad-network#Share-your-ad-network-ID-with-developers.md">@@TOKEN_4@@</a>를 참조하세요.</span>
3. <span class="ko-segment" data-segment-id="seg:list:configure-attribution-windows-per-ad-network:0027:0003">이 딕셔너리 안에 <code>install</code> 딕셔너리를 추가해 <code>click</code> 또는 <code>view</code> 기간을 제어합니다. <code>global</code> 설정과 동일하게 이 <code>install</code> 딕셔너리는 <code>AttributionWindows</code> 딕셔너리 내부에 있어야 합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:configure-attribution-windows-per-ad-network:0028:0001">시간 범위는 global install dictionary와 동일합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:configure-attribution-windows-per-ad-network:0028:0002">이 예시는 광고 네트워크 <code>test.adattributionkit</code>의 딕셔너리를 XML로 렌더링한 것으로, 클릭을 <code>23</code>일로 제한합니다.</span>

```xml
        <key>AttributionWindows</key>
        <dict>
            <key>test.adattributionkit</key>
            <dict>
                <key>install</key>
                <dict>
                    <key>click</key>
                    <integer>23</integer>
                </dict>
            </dict>
        </dict>
```

<span class="ko-segment" data-segment-id="seg:paragraph:configure-attribution-windows-per-ad-network:0030:0001">또한 install dictionary 안에서 <code>ignoreInteractionType</code> 키를 지정할 수 있습니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:configure-attribution-windows-per-ad-network:0030:0002"><code>ignoreInteractionType</code> 키를 <code>view</code> 또는 <code>click</code>으로 설정하면 어트리뷰션 시 특정 광고 네트워크의 <code>view</code> 또는 <code>click</code> 광고 상호작용 유형 노출을 무시하도록 시스템이 동작합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:configure-attribution-windows-per-ad-network:0030:0003">이는 특정 광고 네트워크로 작업할 때 <code>view</code> 또는 <code>click</code> 어트리뷰션 중 하나를 우선 적용할 때 유용합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:configure-attribution-windows-per-ad-network:0031:0001">다음 코드는 <code>global</code> 및 특정 광고 네트워크에 대한 <code>AttributionWindows</code> 설정이 모두 포함된 <code>AdAttributionKitConfigurations</code> 딕셔너리의 XML 렌더링입니다.</span>

```xml
    <key>AdAttributionKitConfigurations</key>
    <dict>
        <key>AttributionWindows</key>
        <dict>
            <key>global</key>
            <dict>
                <key>install</key>
                <dict>
                    <key>view</key>
                    <integer>3</integer>
                </dict>
            </dict>
            <key>com.apple.test.itms11.2</key>
            <dict>
                <key>install</key>
                <dict>
                    <key>ignoreInteractionType</key>
                    <string>view</string>
                    <key>click</key>
                    <integer>5</integer>
                </dict>
        </dict>
    </dict>
```

> <span class="ko-segment" data-segment-id="seg:blockquote:configure-attribution-windows-per-ad-network:0033:0001">❗ **중요**: 상호작용 유형은 광고 네트워크 구성에 대해서만 무시할 수 있습니다.</span> <span class="ko-segment" data-segment-id="seg:blockquote:configure-attribution-windows-per-ad-network:0033:0002">시스템은 global 구성에서는 무시된 상호작용 유형을 인식하지 않습니다.</span>

#### <span class="ko-segment" data-segment-id="seg:heading:configure-attribution-cooldown:0034:0001">어트리뷰션 쿨다운 구성</span>

<span class="ko-segment" data-segment-id="seg:paragraph:configure-attribution-cooldown:0035:0001">구성 가능한 어트리뷰션 쿨다운을 사용하면 마지막 전환 후 시스템이 앱에 대해 새 전환을 생성하지 않을 기간을 지정할 수 있습니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:configure-attribution-cooldown:0035:0002">다음은 한 가지 시나리오입니다. 사용자가 광고에서 앱을 설치한 뒤 2시간 이내에 다른 광고를 탭하고 앱으로 다시 참여합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:configure-attribution-cooldown:0035:0003">기본적으로 시스템은 두 번째 탭에 대한 재참여 전환을 생성하지만, 비즈니스 모델에 따라 초기 전환이 더 중요한 신호가 될 수 있습니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:configure-attribution-cooldown:0035:0004">구성 가능한 어트리뷰션 쿨다운을 사용하면 시스템이 후속 재참여를 무시하는 기간을 지정할 수 있습니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:configure-attribution-cooldown:0036:0001">설치 전환뿐만 아니라 재참여 전환에도 쿨다운 기간을 지정할 수 있습니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:configure-attribution-cooldown:0036:0002">설치 전환 후 쿨다운 기간을 지정하려면 다음 단계를 따릅니다.</span>

1. <span class="ko-segment" data-segment-id="seg:list:configure-attribution-cooldown:0037:0001"><code>AdAttributionKitConfigurations</code> 딕셔너리 안에 <code>AttributionCooldown</code> 키를 가진 딕셔너리를 정의합니다.</span>
2. <span class="ko-segment" data-segment-id="seg:list:configure-attribution-cooldown:0037:0002"><code>AttributionCooldown</code> 안에 <code>install-cooldown-hours</code>라는 이름의 새 요소를 추가합니다.</span>
3. <span class="ko-segment" data-segment-id="seg:list:configure-attribution-cooldown:0037:0003">Type 메뉴에서 형식을 <code>Number</code>로 설정합니다. 이 값은 설치 전환 후 시스템이 새 전환을 받기 전에 대기하는 시간(시간 단위)입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:configure-attribution-cooldown:0038:0001">이 예시는 <code>AttributionCooldown</code>의 XML 렌더링을 보여주며 설치 쿨다운 기간을 24시간으로 설정합니다.</span>

```xml
            <key>AttributionCooldown</key>
            <dict>
                 <key>install-cooldown-hours</key>
                 <integer>24</integer>
            </dict>
```

<span class="ko-segment" data-segment-id="seg:paragraph:configure-attribution-cooldown:0040:0001">또는 재참여 전환 후 쿨다운 기간을 지정할 수 있습니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:configure-attribution-cooldown:0040:0002">이 경우 숫자 키의 이름을 <code>re-engagement-cooldown-hours</code>로 지정합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:configure-attribution-cooldown:0040:0003">이 값은 재참여 전환 후 새 전환을 수락하기 전에 시스템이 대기하는 시간을 시간 단위로 나타냅니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:configure-attribution-cooldown:0041:0001">시스템은 설치 및 재참여 쿨다운 기간 모두에 대해 <code>0</code>에서 <code>720</code>시간 범위의 값을 허용합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0042:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0043:0001"><a href="registering-an-ad-network.md">Registering an ad network</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0044:0001">Apple에 광고 네트워크를 등록한 후 AdAttributionKit API를 사용해 광고 캠페인을 실행합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0045:0001"><a href="configuring-a-publisher-app.md">Configuring a publisher app</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0046:0001">게시자 앱을 설정해 광고 캠페인에 참여합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0047:0001"><a href="configuring-an-advertised-app.md">Configuring an advertised app</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0048:0001">광고 대상 앱을 광고 캠페인에 참여할 수 있도록 준비합니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0050:0001">*<a href="https://developer.apple.com/documentation/adattributionkit/configuring-attribution-rules-for-your-app">View on Apple Developer</a>*</span>
